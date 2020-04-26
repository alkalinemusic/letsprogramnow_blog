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

Blog.create({
	title: "Test blog",
	image: "https://images.unsplash.com/photo-1587616285545-79fdadbd01e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	body: "Hello this is a blog post"
});



var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});