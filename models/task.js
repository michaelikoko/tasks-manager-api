const {Model, DataTypes} = require("sequelize")
const {sequelize} = require("../utils/db")

class Task extends Model {}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: "Task",
    timestamps: true,
    underscored: false,
    defaultScope: {
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    }
})

Task.sync()

module.exports = Task