
  var mongoose = require('mongoose');

  // declare a schema (schema) for model
  // mongoose schema data types:

  // String
  // Number
  // Date
  // Boolean
  // Buffer - mixed data types (image, video, etc)
  // Mixed - mixed data types
  // Array (arrays must contain data of the same type!)
  // ObjectID (_id) - unique GUID or ID associated with your new model
  var TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    description: String,
    updated_at: { type: Date, default: Date.now}
  });

// hey node! I want to export the following module for re-use
// mongoose - create a model with a (name, schema)
  module.exports = mongoose.model('Tasks', TaskSchema);
