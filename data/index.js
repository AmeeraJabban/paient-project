const express = require('express');
var patients = require('./patient.js')
const app = express();

app.use('/API/patient', patients)
app.listen(3000, function() {
  console.log('listening on localhost/3000');
});