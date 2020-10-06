const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.DB_MONGO, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               useCreateIndex: true,
               useFindAndModify: false
          });
          console.log("Database connected successfully");
     } catch (error) {
          console.log('Something went wrong');
          console.log(error);
          process.exit(1);
     }
}

module.exports = connectDB;