var model = require("../models/model.todo");

//create a Task

exports.add = (data, callback) => {
  new model.TodoSchema(data).save((err, inserted) => {
    callback(err, inserted);
  });
};

//Create Many Tasks
exports.addMany = (rows, callback) => {
  model.TodoSchema.insertMany(rows, (err, docs) => {
    callback(err, docs);
  });
};

//Get all tasks from DB
exports.getAll = (criteria, callback) => {
  model.TodoSchema.find(criteria, (err, data) => {
    callback(err, data);
  });
};

//Update a Task
exports.update = (criteria, data, callback) => {
  model.TodoSchema.updateMany(criteria, data, (err, doc) => {
    callback(err, doc);
  });
};
