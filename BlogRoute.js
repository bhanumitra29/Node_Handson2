const BlogRoute=require('express').Router();

BlogRoute.get("/Home",(req,res)=>{
    res.send("This is my Home page")
})

BlogRoute.get("/Bollywood",(req,res)=>{
    res.send("This is my Bollywood page")
})

BlogRoute.get("/Hollywood",(req,res)=>{
    res.send("This is my Hollywood page")
})

BlogRoute.get("/Fitness",(req,res)=>{
    res.send("This is my Fitness page")
})

module.exports=BlogRoute