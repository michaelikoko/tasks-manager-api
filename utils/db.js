const Sequelize = require("sequelize");
const { DATABASE_URL } = require("./config");

const sequelize = new Sequelize(DATABASE_URL)

const connectToDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Database connection established successfully.")
    } catch (error) {
        console.log("Unable to connect to the database:", error)
        return process.exit(1)
    }
    return null
}

module.exports = {
    connectToDB,
    sequelize
}