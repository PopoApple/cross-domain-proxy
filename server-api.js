var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
app.get("/", (req, res) => {
    res.send("123");
})
app.get("/api/a", (req, res) => {
    res.send("a");
})
app.get("/b", (req, res) => {
    console.log(req.headers);
    res.send("b");
})
app.listen(5000, () => console.log('api server listening on port 5000!'));