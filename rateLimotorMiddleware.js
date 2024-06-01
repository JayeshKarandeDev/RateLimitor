const express=require("express")
const RateLimitor = require("./rateLimitor")

const rateLimitor = new RateLimitor(5,2000)

function rateLimitorMiddleware(req,res,next) {
        if (rateLimitor.allowRequest()) {
            return next()
        }else{
            return res.status(429).send("Too many requests")
        }
}

module.exports=rateLimitorMiddleware