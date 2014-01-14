var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.configure(function(){
  app.use(express.bodyParser());
});

app.use(express.logger());

app.use(express.static(__dirname ));

app.get('/', function(req, res){
    res.sendfile('login.html', { root: __dirname + "/" } );
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
