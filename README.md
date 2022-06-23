# cs-notes-site-project-breakdown
#### Live Code Editor Components
- [ ] **(S)** Put all the information from this link in `keyword.json`
		  https://www.w3schools.com/python/python_ref_functions.asp
- [ ] **(S)** Make a utility function `retrieveKeywordDetails()` in `util.js` that takes in a certain a certain keyword as an input and returns the detail about that keyword from `keyword.json`. If there is no such keyword it returns `null`
	https://codemirror.net/examples/tooltip/
- [ ] **(D)** Make a next.js api endpoint `/execute` that will take in python code as parameter and execute it on the server and send back the result.
- [ ] **(D)** Make a next.js code editor component using code mirror. (edtior area + execution area)
	- [ ] **(D)** Show keyword details as a tooltip when hovered using `retrieveKeywordDetails()`
	- [ ] **(D)** Integrate `/execute` endpoint with the editor component

#### Pages
- [ ] **(D)** Make a separate folder name `code` where we would store all the examples codes
- **Index Page**
	- [ ] **(S)** `retrieveChapterNames()` - retrieve all the chapter names of the  `code` folder. 
	- [ ] **(S)** Make layout of the index page in html
	- [ ] **(D)** Convert the layout of index page from html to JSX (nextjs)
	- [ ] **(S)** Add styling to the index page
	- Render all the chapters to index page using `retrieveChapterNames()`
- **Chapter Page**
	- [ ] **(S)** `retrieveTopics()` - returns all the topic path given a topic name from `code` folder
	- [ ] **(S)**  `retrieveCodePaths()` - returns path to all code files inside a topic given a topic path from `code` folder
	- [ ] **(S)**  `retrieveCode()` - returns the code block given a code path from `code` folder
	- [ ] **(S)** Make layout of the chapter page in html
	- [ ] **(D)** Convert the layout of chapter page from html to JSX (nextjs)
	- [ ] **(S)** Add styling to the chapter page
	- [ ] **(D)** Render all the topic to chapter page using all the above functions.

