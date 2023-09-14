const express = require("express")
const { getAllStudents, createStudent } = require("../controllers/students")

const studentsRouter = express.Router()

studentsRouter.get("/", getAllStudents)
studentsRouter.post("/", createStudent)

module.exports = studentsRouter