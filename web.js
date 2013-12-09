var express = require("express");
var app = express();
//var Server = require('mongodb').Server;
var port = process.env.PORT || 5000;

app.configure(function(){
  app.use(express.bodyParser());
});

app.use(express.logger());

//app.use("/", express.static("content"));

app.listen(port, function() {
  console.log("Listening on " + port);
});
