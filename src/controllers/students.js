const db = require("../db")

const getAllStudents = async (_, res) => {
    const students = await db.Student.findAll();
    res.status(200).json({ students })
}

const createStudent = async (req, res) => {
    const newStudent = await db.Student.create(req.body)
    res.status(201).json(newStudent)
}

module.exports = {
    getAllStudents,
    createStudent
}