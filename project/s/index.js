const express= require('express');
const mongoose=require('mongoose');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello from me");
})

app.listen(3000,()=>{
    console.log("server running");
})