 //jshint esversion:6
const express=require("express");
const https=require("https");
// const request=require("request");
const app=express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const _ = require('lodash');
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Shreyas45:20169361Shreyas@cluster0.9qcjc9p.mongodb.net/blogDB", {useNewUrlParser: true});
let a="Tutorials and how-to guides are a great way to engage your audience and educate them in a single blog post. Plus, they’re easy to work on too since you’re already familiar with the topic.";
let b="Welcome I am Shreyas. Learning full stack development !";
let c="If you want to contact me it would be a great pleasure for me to help you out in a clean way regarding the development issues ! Contact No- 8792169865";
const postSchema=new mongoose.Schema({
  title:String,
  content:String
});
const Post =new mongoose.model("Post", postSchema);
app.get("/",function(req,res){
  Post.find({},function(err,founditems){
    res.render("home",{
      FirstContent:a,
      postss:founditems
    });
  });
});
app.get("/about",function(req,res){
  res.render("about",{x:b});
});
app.get("/contact",function(req,res){
  res.render("contact",{y:c});
});
app.get("/compose",function(req,res){
  res.render("compose");
});
app.post("/compose",function(req,res){
   const a=new Post({
    title:req.body.title1,
    content:req.body.post
  });
a.save();
res.redirect("/");
  Post.find({},function(err,founditems){
    res.render("home",{
      FirstContent:a,
      postss:founditems
    });
  });
});
app.get("/posts/:postid",function(req,res){
// const b=req.params.postid.toLowerCase();
const a=req.params.postid;
  Post.findOne({_id:a},function(err,found){
     res.render("post",{
       posttitle:found.title,
       postcontent:found.content
     });
});
});
// else if(b===String){
//   Post.findOne({title:b},function(post){
//     const c=post.title.toLowerCase();
//     if(b===c){
//       res.render("post",{
//         posttitle:post.title,
//         postcontent:post.content
//     });
//   }
// });
// }
app.post("/shreyas",function(req,res){
     res.render("compose");
});
app.listen(process.env.PORT || 3000,function(){
  console.log("hello");
});
