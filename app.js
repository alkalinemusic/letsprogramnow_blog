var express = require("express"),
bodyParser 	= require("body-parser"),
mongoose 	= require("mongoose"),
app		 	= express()

mongoose.connect("mongodb://localhost/letsprogramnow_blog", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
})






var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});