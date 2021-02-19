const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const controller = require('./controllers');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

// app configuration
dotenv.config();
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//  Enable All CORS Requests
app.use(cors())

// Routes
controller(app);

// Entry point of The application
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Connecting to The DataBase  :
const uri = process.env.URI_DATABASE;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err){
    console.log(err);
  }
  else{
    console.log("Connected To Database !");
  }
});


// warming up the engines .
app.listen(app.get('port'), () => {
    console.log('Application running on port: ', app.get('port'));}
    );