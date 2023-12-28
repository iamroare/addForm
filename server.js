const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
// const db = require('./config/mongoose.js')
const PORT = 8000
const app = express()
// const routes = require('./routes')
const formRoutes= require('./route/formRoute.js')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/formRoute',formRoutes)


const key=`TnPuWz7oBUn5yO3f`;
const connectURL= `mongodb+srv://iamroarbeast:${key}@cluster0.yhzi7dv.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connectURL
    // 'mongodb://localhost:27017/databsessssss'
    , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // Start the Express server after the database connection is established
  app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
  });
});
