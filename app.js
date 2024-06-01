const express = require("express")
app=express()

const rateLimitorMiddleware = require("./rateLimotorMiddleware")

app.use(rateLimitorMiddleware)

app.get("/",(req,res)=>{
    res.send("Hellow Rate Limitor")
})

app.get("/push",(req,res)=>{
    return res.send("Request Success")
})

app.listen(5000,()=>{
    console.log("server running on 5000")
})