import express from "express"
import {allStudents, newStudent, updateStudent} from '../controllers/student.js'
import { appendFile } from "fs";
const router = express.Router()


router.get("/all",allStudents)
router.post("/create",newStudent)
router.put("/update",updateStudent)
export default router;