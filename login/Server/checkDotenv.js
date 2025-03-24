require("dotenv").config();
console.log("dotenv config loaded in checkDotenv.js");
console.log("Check Environment Variables:", {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  SECRET: process.env.SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
});
