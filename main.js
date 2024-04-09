const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
const port = 3000;
const data = {
  name:"Avneet",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/data", (req, res) => {
  res.json(data); 
  console.log(data.name); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
