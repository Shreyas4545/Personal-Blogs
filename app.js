//jshint esversion:6
const express=require("express");
const https=require("https");
// const request=require("request");
const app=express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
const titlearray=[];
let posts=[];
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const _ = require('lodash');

let a="Tutorials and how-to guides are a great way to engage your audience and educate them in a single blog post. Plus, they’re easy to work on too since you’re already familiar with the topic.";
let b="Welcome I am Shreyas. Learning full stack development !";
let c="If you want to contact me it would be a great pleasure for me to help you out in a clean way regarding the development issues ! Contact No- 8792169865";
app.get("/",function(req,res){
  res.render("home",{
    FirstContent:a,
    posts:posts
    // titlearray1:titlearray
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
  // const s=req.body.title1;
  const object={
    title1:req.body.title1 ,
    content:req.body.post
  };
  // titlearray.push(s);
  posts.push(object);
  res.redirect("/");
});
app.get("/posts/:postname",function(req,res){
  //Kebabcasing(const a=_.kebabCase(req.params.postname))
const a=_.lowerCase(req.params.postname);
  posts.forEach(function(post){
    const b=_.lowerCase(post.title1);
    if(a===b){
      res.render("post",{
        posttitle:post.title1,
        postcontent:post.content
    })
  }
  })
});
app.post("/shreyas",function(req,res){
     res.render("compose");
})
app.listen(process.env.PORT || 3000,function(){
  console.log("hello");
});
