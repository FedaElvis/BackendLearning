import expres from 'express'

const allStudents = (req,res)=>{res.send("all students")}
const newStudent = (req,res)=>{res.send("new student")}
const updateStudent = (req,res)=>{res.send("update student")}

export {allStudents, newStudent, updateStudent}
