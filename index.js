import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse the request body
app.use(express.urlencoded({ extended: true }));

// Variable to store the content and title
let storedContent = '';
let storedTitle = '';

// Route to handle the form submission
app.post('/create', (req, res) => {
  storedContent = req.body.content;
  storedTitle = req.body.title;
  res.redirect('/display-content');
});

// Route to display the saved content
app.get('/display-content', (req, res) => {
  res.render('display-content', { content: storedContent, title: storedTitle });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get("/",(req,res)=>{
  res.render("index");
});

app.get("/about",(req,res)=>{
  res.render("about");
});

app.get("/reviews",(req,res)=>{
  res.render("reviews");
});

app.get("/contact",(req,res)=>{
  res.render("contact");
});

app.get("/create",(req,res)=>{
  res.render("create");
});
