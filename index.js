import express from 'express'
import middlewares from './middlewares/logs.js'
const app = express();

app.get("/", middlewares, (req,res,next)=>{
    res.send("welcome midllewares")
    next()
})



app.listen(8000,()=>console.log("server up"))