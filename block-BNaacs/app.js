var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var ejs = require('ejs');
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);
var app = express();

// ejs

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());


app.get('/', (req, res) => {
  res.render('school');
});

app.listen(4000, () => {
  console.log('server is running at 4k');
});
