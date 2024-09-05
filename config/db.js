const mongoose = require('mongoose');
const string= require('../.env')
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.conn_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;


