var express = require("express"),
bodyParser 	= require("body-parser"),
mongoose 	= require("mongoose"),
app		 	= express()


// APP CONFIG
mongoose.connect("mongodb://localhost/letsprogramnow_blog", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema);


// RESTful ROUTES

app.get("/", function(req, res){
	res.send("You've reached the home page!");
});



var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});