const express = require("express");
require("dotenv").config();
const connectDatabase = require("./config/db");
const { userRoute } = require("./routes/user.route");
const cors = require("cors");
// const cors = require('cors');
const path = require("path");

const app = express();
const cookieParser = require("cookie-parser");


// Configure CORS
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials:true
  }));


// database connection
connectDatabase();


app.use(cookieParser());
app.use(express.json());
app.use("/", userRoute);

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, "client")));

app.listen(process.env.PORT, async () => {
    console.log("Server Starting on PORT :", process.env.PORT);
});
