require("dotenv").config();

const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED!!");
  })

//My Routes
const authRoutes = require("./routes/auth");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/",authRoutes);

app.listen(process.env.PORT || 8000, () => console.log("Server connected!"));
