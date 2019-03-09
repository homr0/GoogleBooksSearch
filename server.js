const express = require("express");
const mongoose = require("mongoose");
const routes = require("./views");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Socket middleware.
io.on("connection", client => {
  console.log("user connected");
  client.on("savedBook", () => console.log("A book has been saved!"));
  client.on("disconnect", () => console.log("user disconnected"));
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});