const mongoose = require("mongoose");
const dbURI = "mongodb+srv://ketansali:Ketan7600@cluster0.ve9w5.mongodb.net/mongoDbTrasaction?retryWrites=true&w=majority";

mongoose.connect(dbURI);

// mongoose.set("useCreateIndex", true);

// Db Connection
var db = mongoose.connection;

db.on("connected", function() {
  console.log("Mongoose connected to " + dbURI);
});

db.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});

db.on("disconnected", function() {
  console.log("Mongoose disconnected");
});

//Exported the database connection to be imported at the server
exports.default = db;
