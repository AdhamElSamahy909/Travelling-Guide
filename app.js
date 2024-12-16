const express = require("express");
const myCollectionRouter = require("./routes/myCollectionRouter");
const viewsRouter = require("./routes/viewsRouter");
const session = require("express-session");

var path = require("path");

var app = express();

// view engine setup

app.use(
  session({
    secret: "your-secret-key", // Replace with a strong secret key
    resave: false, // Prevent unnecessary session save
    saveUninitialized: false, // Don't save uninitialized sessions
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", viewsRouter);
app.use("/myCollection", myCollectionRouter);

module.exports = app;
