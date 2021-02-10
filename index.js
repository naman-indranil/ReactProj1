const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send({hi:"there"});
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
});