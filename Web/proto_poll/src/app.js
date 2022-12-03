const express = require("express");
const bodyParser = require("body-parser");
const utils = require("./utils");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = 5000;
const adminCode = utils.generateCode();
const user = {"profilePicture": false}

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/flag", (req, res) => {
  res.render("authenticate", {
    message: "Log in as admin to view the flag"
  })
})

app.post("/flag", (req, res) => {
  if(req.body.admin && req.body.adminCode !== adminCode){
    res.render("authenticate.ejs", {
      message: "You need an admin code to verify"
    })
    return;
  }
  let userAuth = Object.assign(user, req.body);
  if(userAuth.admin){
    res.render("flag");
  } else {
    res.render("authenticate.ejs", {
      message: "Only admins can view the flag"
    })
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
