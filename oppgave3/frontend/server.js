const express = require('express');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send("Hello, World!");
	logger.info('Responded to GET request on /')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
