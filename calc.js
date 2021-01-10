const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');

// app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
  // var w = parseFloat(req.body.weight);
  // var h = parseFloat(req.body.height);
  // var result = (w)/(h*h);
  // var bmi = "";
  // var wei = "";
  // if(result>=19 && result<=25){
  //   bmi = toString(result);
  //   wei = "normal";
  // }else if (result<19) {
  //   bmi = toString(result);
  //   wei = "underweight";
  // }else{
  //   bmi = toString(result);
  //   wei = "overweight";
  // }
  // res.render("success", {BMI: bmi, weight: wei});

});


app.post("/", function(req, res){
  var unitforweight = req.body.unitsforweight;
  var unitforheight = req.body.unitsforheight;
  console.log(unitforweight);
  console.log(unitforheight);
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);

  if(unitforweight === "kilograms"){
    w = w;
  }else if(unitforweight === "pounds"){
    w = w * 0.454;
  }

  if(unitforheight === "centimetres"){
    h = h;
  }else if(unitforheight === "inches"){
    h = h * 2.54;
  }

  console.log(w);
  console.log(h);

  var result = (w)/(h*h);
  result = result*10000;
  result = result.toFixed(2);
  console.log(isNaN(result));
  console.log(result);
  var bmi = "";
  var wei = "";
  if(result>=19 && result<=25){
    bmi = result.toString();
    wei = "normal";
  }else if (result<19) {
    bmi = result.toString();
    wei = "underweight";
  }else{
    bmi = result.toString();
    wei = "overweight";
  }
  res.render("success", {BMI: bmi, weight: wei});



});

app.post("/success", function(req, res){
  res.render("index");
});

// app.get("/success", function(req,res){
// //   if(document.querySelector('.custombtn').clicked == true){
// //     console.log("clicked.")
// //   res.redirect("/");
// // }
// console.log("hihih");
// });


app.listen(3000, function(){
  console.log("server is running on port 3000");
});
