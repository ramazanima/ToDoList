const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

var items = [];
var workItems = [];
app.get("/", (request, response) => {
  const day = date.getday();

  response.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function(request, response) {
  const item = request.body.newItem;

  if (request.body.list === "Work"){
    workItems.push(item);
    response.redirect("/work");
  } else{
    items.push(item);
    response.redirect("/");
  }
});

app.get("/work", function(request, response){
  response.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(request, response){
  response.render("about");
})

app.post("/work", function(request, response){
  let item = request.body.newItem;
  workItems.push(item);
  response.redirect("/work");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
