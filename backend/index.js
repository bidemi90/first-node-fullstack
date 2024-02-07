const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")
const bodypaser = require("body-parser")
app.set("view engine", "ejs")
app.use(bodypaser.json())
app.use(bodypaser.urlencoded({ extends: true }))
require("dotenv").config()
const cors = require('cors');


const uri = process.env.MONGOODB_URI

app.use(cors({origin : "*"}))
const new_userroutes=require("./routers/new_userrouters")
const { errorHandler } = require("./middlewares/errorhander")



app.use("/new_user",new_userroutes)

const connect = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(uri).then((result) => {
        console.log("mongoose connect react + node");
      });
    } catch (error) {
      console.log(error);
    }
  };
  connect();

  
  app.use(cors({origin : "*"}))


app.use(errorHandler)
  let port = process.env.port || 3298 


app.listen(port, () => {
    console.log("node + react");
})