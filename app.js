const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var items = [];

app.get("/", (request, response) => {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);

  response.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function(request, response) {
  var item = request.body.newItem;
  items.push(item);
  response.redirect("/");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
