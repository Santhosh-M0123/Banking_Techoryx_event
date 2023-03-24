var express = require("express")
var app = express()
var bodyparser = require("body-parser")
// var mysql = require("mysql")
var routing = require("./challan")
var cors  =require("cors")
var mail = require("nodemailer");


app.use(cors())
app.use(bodyparser.json());
app.use("/post" , routing)


app.listen(8000, () => console.log("running on port 3002"))

