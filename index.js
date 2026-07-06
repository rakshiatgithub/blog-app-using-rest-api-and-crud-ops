const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override")

// uuidv4(); // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {    id:uuidv4(),
        username: "apnacollege",
        content:" I love coding"
    },
    {   id:uuidv4(),
        username: "Rakshitha",
        content:"Hardwork is important to  achieve success"
    },
    {   id:uuidv4(),
        username: "RahulKumar",
        content:" I got selected for my first internship"
    }
];

app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});

});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");

});

app.post("/posts", (req,res) => {
     let {username,content }=req.body;
     let id = uuidv4(); 
    posts.push({id, username ,content});
    res.redirect("/posts");
//    res.send("post request working");
});

app.get("/posts/:id",(req,res) => {
    let {id}= req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) =>{
    let {id}= req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.send(" Patch request working");
    res.redirect("/posts")

});



app.get("/posts/:id/edit", (req,res) => {
 let {id} = req.params;
 let post = posts.find((p) => id === p.id);
 res.render("edit.ejs", {post});
});

app.listen(port, () => {
    console.log("the port is listening at port :8080")
});
