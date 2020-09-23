const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const { success, error, info } = require("consola");

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


const { mongoURI, port } = require("./config/config");

// Connect to MongoDB

const connectMongoDB = async () => {
    try {
        console.time("MongoDB Connection Time");
        await mongoose.connect(mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
        success({message: "MongoDB Connection Started", badge: true});
        return console.timeEnd("MongoDB Connection Time");
    } catch (error) {
        return error({message: `Failed To Connect MongoDB DataBase\n\n${error}`, badge:true});
    }
}

// Start app server

const startServer = async () => {
    try {
        console.time("Server starting time");
        await connectMongoDB();
        server.listen(port, () => {
            info({ message: `app started`, badge: true });
            console.timeEnd("Server starting time");
            success({ message: `server started at port ${port}`, badge: true });
        });
        return
    } catch (error) {
        return error({ message: `failed to start server \n ${error}`, badge: true });
    }
}

startServer();

// Routes

// places routes

const placesRoutes = require("./routes/places_routes");
app.use("/api/places/", placesRoutes);
