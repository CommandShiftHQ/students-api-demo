require("dotenv").config()
const express = require("express")
const db = require("./src/db")
const studentsRouter = require("./src/routes/students")

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
    res.send("Hello world!")
})

app.use("/students", studentsRouter)

app.listen(3000, async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log("App is listening on port 3000")
})