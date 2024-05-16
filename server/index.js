const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer');




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const filename = path.basename(file.originalname, ext);
    cb(null, filename + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });





dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors())

const port = process.env.PORT;





const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const categoryRoute = require('./routes/category');
const commentsRoute = require('./routes/comments');

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/category', categoryRoute);
app.use('/api/comments', commentsRoute);

app.post('/upload', upload.single('image'), async function (req, res, next) {
  res.status(201).json("Uploaded");
});

app.get('/upload', function (req, res, next) {
res.json({ message: 'File uploaded successfully' });
});



mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });



app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
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
