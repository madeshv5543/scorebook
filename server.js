/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const path = require('path');
const compression = require('compression');

const port = 8080;
const app = express();
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(compression());
app.use(requireHTTPS);
app.use(express.static('./dist/'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/'}),
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
       console.log("server runing")
    }
});
