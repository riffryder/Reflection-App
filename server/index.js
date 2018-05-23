const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

//Start app server
const app = express()

//Use body-parser middleware for json and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Use express.static to serve static files from the public directory
app.use(express.static(path.join(__dirname, '/../public')));

//App server listening on port 3000
app.listen(3000, () => console.log('Example app listening on port 3000!'))