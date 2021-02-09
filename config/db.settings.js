const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
var uri = process.env.DB_URI;
// Connect MongoDB at default port 27017.
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

// Setup event listeners for the mongoose connections
mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error");
  console.log(err);
});
// events
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose disconnected");
});
mongoose.connection.on("open", function() {
  console.log("Mongoose connected");
});

// export the mongoose & db
exports.mongoose = mongoose;
exports.db = mongoose.connection;
