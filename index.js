const express = require('express');
const sendSeekable = require('send-seekable');
const fs = require('fs');
var throttle = require('express-throttle-bandwidth');

const app = express();
app.use(sendSeekable);

const properlyLinearized = fs.readFileSync('/Users/hok/Downloads/linearize-war-peace.pdf');
const incorrectlyLinearized = fs.readFileSync('/Users/hok/Downloads/near-native.pdf');

app.get('/*', function (req, res, next) {
  res.sendSeekable(incorrectlyLinearized);
})

app.listen(9898);