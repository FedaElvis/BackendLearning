import express from 'express'
import students from './route/student.js'
const app = express();

app.use("/students",students)


app.listen(8000,()=>console.log("server up"))