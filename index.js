import express from "express";

const app = express();
const port = 3000;
// const ejs = require('ejs');
// app.set('view engine', 'ejs');

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  app.get("/",(req,res)=>{
    res.render("index.ejs");
  });

  app.get("/about",(req,res)=>{
    res.render("about.ejs");
  });

  app.get("/reviews",(req,res)=>{
    res.render("reviews.ejs");
  });

  app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
  });