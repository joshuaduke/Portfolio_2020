
let express = require('express');
let app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res)=>{
  res.render("index");
});

app.get("/resume", (req, res)=>{
  res.render("resume");
})

app.get("/portfolio", (req, res)=>{
  res.render("portfolio");
});

app.get("/timeline", (req, res)=>{
  res.render("timeline");
})

app.get("/blog", (req, res)=>{
  res.render("blog");
})


app.get("/contact", (req, res)=>{
  res.render("contact");
});




app.listen(3000, process.env.PORT, ()=>{
  console.log("server has started");
})