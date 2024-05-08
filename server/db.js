// Importing mongoose library
const mongoose = require("mongoose");

// Connecting to MongoDB Atlas database
mongoose.connect(
  "mongodb+srv://dataneuron:Wr8XQ2n5aCo6RPnm@cluster0.ebxrqax.mongodb.net/dataneuron"
);

// Defining schema for component collection
const componentSchema = new mongoose.Schema({
  componentId: String,
  data: { type: String, required: true },
});

// Defining schema for count collection

const countSchema = new mongoose.Schema({
  addCount: {
    type: Number,
    default: 0,
  },
  updateCount: {
    type: Number,
    default: 0,
  },
});

const ComponentDb = mongoose.model("ComponentDb", componentSchema);
const CountDb = mongoose.model("CountDb", countSchema);

// Exporting models
module.exports = {
  ComponentDb,
  CountDb,
};
