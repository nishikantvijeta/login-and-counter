require('dotenv').config();
console.log("Environment Variables:", {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  SECRET: process.env.SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
});
