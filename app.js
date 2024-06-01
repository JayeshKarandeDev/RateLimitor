const Queue = require("./Queue")
const express = require("express")
app=express()

const queue = new Queue()
console.log(queue,queue.size)

app.get("/",(req,res)=>{
    res.send("Hellow Rate Limitor")
})

app.get("/push",(req,res)=>{
    result = queue.enqueue("hi")
    console.log(result)
    return res.send(result)
})

app.listen(5000,()=>{
    console.log("server running on 5000")
})