require("dotenv").config();

module.exports = {
    mongoURI: process.env.MongoDB_URI,
    port: process.env.PORT
}