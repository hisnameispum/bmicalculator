const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
})

app.post('/', (req, res) => {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let result = weight / (height*height);
  res.send("Your BMI is :"+ result);
})

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
