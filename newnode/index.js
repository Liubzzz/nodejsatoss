const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("Send something")
})
app.listen("8081",()=>{

})