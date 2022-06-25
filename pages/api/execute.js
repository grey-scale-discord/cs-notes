import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { PythonShell } from "python-shell";

function createTempFile(content) {
  return new Promise((resolve, reject) => {
    const uuid = uuidv4();
    const tempFilePath = `temp/${uuid}.py`;
    fs.appendFile(tempFilePath, content, (err) => {
      if (err) reject(err);
      resolve(tempFilePath);
    });
  });
}

function deleteTempFile(tempFilePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(tempFilePath, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

async function executePythonScript(script) {
  return new Promise(async (resolve, reject) => {
    const tempPythonScriptPath = await createTempFile(script);
    const pyshell = new PythonShell(tempPythonScriptPath);
    let output = "";
    pyshell.on("message", (message) => {
      output += message;
    });
    pyshell.end(async (err) => {
      if (err) reject(err);
      await deleteTempFile(tempPythonScriptPath);
      resolve(output);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const script = req.body.script;
  const output = await executePythonScript(script);
  res.status(200).json({ output: output });
}
