const { Schema } = require("mongoose");
const settings = require("../config/db.settings");
// Declare the Schema of the Mongo model
var TodoSchema = new settings.mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  task_id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  task: {
    type: String,
    required: true,
    unique: true
  }
});

exports.TodoSchema = settings.mongoose.model("todos", TodoSchema);
