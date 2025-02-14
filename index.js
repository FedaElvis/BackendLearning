import express from 'express'
import middlewares from './middlewares/logs.js'
const app = express();

app.use(express.static('./public'))

app.get("/",(req,res)=>{
    res.sendFile(path.join(process.cwd()), "./public/index.html" )
})

app.listen(8000,()=>console.log("server up"))