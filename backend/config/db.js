const mongoose = require("mongoose")

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1) //Exit process
  }
}

module.exports = connectDb
