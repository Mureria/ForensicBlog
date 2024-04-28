const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const User = require('./models/User');
const cookieParser = require('cookie-parser');



dotenv.config();
app.use(express.json());
app.use(cookieParser());



const authRoute = require('./routes/auth');

app.use('/api/auth', authRoute);




mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });



app.listen(5000, () => {
  console.log('Server is running on port 5000!');
});


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
