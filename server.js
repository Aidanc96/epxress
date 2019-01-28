const express = require("express");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/aidan", (req, res) => {
  res.render("aidan");
});
app.get("/ninam", (req, res) => {
  res.render("ninam");
});
app.get("/james", (req, res) => {
  res.render("james");
});

app.get("/*", (req, res) => {
  throw new Error("None Specified Route");
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(404);
  res.render("error-page");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
