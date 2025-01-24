const express = require("express")
const { default: mongoose } = require("mongoose")
const Url = require("./model/Url")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
async function db(){
try{
  const connecttodb = await mongoose.connect("mongodb://localhost:27017/URL")
  console.log("Connected to db....");
}catch(e){
  console.log("error in connecting to db..",e);
}
}
db()

app.listen(3000,()=>{
  console.log("Listening...")
})
// app.get("/",(req,res)=>{
//   res.send("Server is working fine..")
//   console.log("ha bol ")
// })

app.get("/",async(req,res)=>{
  console.log(req.query.token)
  const token = req.query.token
  const findurl = await Url.findOne({
    token:token,
  })
  if(!findurl){
    res.json({
      message:"No Url found "
    })
  }
  res.redirect(findurl.link)
})



app.post("/shorturl",async(req,res)=>{
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }
  const newlink = new Url({
    link :req.body.url,
    token:token
  })
  await newlink.save();
  res.json({shorturl:`${process.env.BACKEND_URL}/?token=${token}`})
})
