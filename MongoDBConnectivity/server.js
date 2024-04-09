const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/student")
  .then(() => console.log("Database Connected!"));
   
const name = new mongoose.Schema({
  name: String,
});

const sendname = mongoose.model("details", name);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  const sendingName = new sendname({ name: "Maya" });
  sendingName.save().then(() => console.log("send successfullly"));
});
