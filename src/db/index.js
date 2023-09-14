const { Sequelize } = require("sequelize")

const StudentModel = require("../models/student")

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const sequelize = new Sequelize({
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD
})

const Student = sequelize.define("Student", StudentModel);

(async () => {
    await sequelize.sync({ alter: true });
})();

module.exports = { Student }