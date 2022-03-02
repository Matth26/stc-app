const mongoose = require('mongoose');
const { Schema } = mongoose;

const stepSchema = new Schema({
  title: String,
  date: Date,
  childChart: { type: String, default: '' },
});

module.exports = stepSchema;
