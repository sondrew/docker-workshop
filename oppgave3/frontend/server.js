const express = require('express');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send("Hello, World!");
	console.log('Responded to GET request on /')
});

app.listen(port, (err) => {
  if (err) {
    return console.error('something bad happened', err)
  }

  console.info(`Server is listening on ${port}`)
});
