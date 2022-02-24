const express = require('express');
const bodyParser = require('body-parser')
const app  = express();
const path = require('path')
const history = require('connect-history-api-fallback')

const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))
app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render(path.join(__dirname ,'/dist'))
})
app.listen(3000, function(err, res) {
  if(!err)
   console.log(`App started listening on the port 80`)
});