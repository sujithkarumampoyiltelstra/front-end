const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.port || 8080;

const app = new express();
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'dist')));
app.post('/person', (req, res) => {
	res.status(200);
	res.json(req.body);
});
app.listen(port, () => {
	console.log("Server Listening on - " + port);
})
