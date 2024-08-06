import express from 'express'
const router=express.Router()

router.get("/all",(req,res)=>{
    res.send("all students")
})
router.post("/create",(req,res)=>{
    res.send("create student")
})
router.put("/update",(req,res)=>{
    res.send("update students")
})
router.delete("/delete",(req,res)=>{
    res.send("delete students")
})

export default router;