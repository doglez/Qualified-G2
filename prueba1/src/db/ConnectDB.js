const mongoose = require("mongoose");

const ConnectDB = async () => {
    const conn = await mongoose.connect("mongodb://localhost:27017/db_test");

    console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = ConnectDB;
