const express =require("express");
const { cos } = require("mathjs");
const app =express()


app.use(express.json());
app.use((req,res,next)=>{
    console.log("Inside Midd");
    next();
})
app.listen(4000,()=>{
    console.log("Sun raha hai");
})
app.get("/",(req,res)=>{
    res.send({"message":"It's my day"})
})
app.post('/',(req,res)=>{
   let cos= {'message':"It's my day"};
   let newcos={...cos,...req.body};
    console.log(req.body)
    res.send("Seccessfully")
})