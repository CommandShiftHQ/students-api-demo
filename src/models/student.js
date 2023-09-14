const { DataTypes } = require('sequelize');

const Student = {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
};

module.exports = Student