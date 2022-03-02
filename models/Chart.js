const mongoose = require('mongoose');
const { Schema } = mongoose;
const StepSchema = require('./Step');

const chartSchema = new Schema({
  name: String,
  current: String,
  goal: String,
  steps: [StepSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('charts', chartSchema);
