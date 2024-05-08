const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dataneuron:Wr8XQ2n5aCo6RPnm@cluster0.ebxrqax.mongodb.net/dataneuron"
);

const componentSchema = new mongoose.Schema({
  componentId: String,
  data: { type: String, required: true },
});

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

module.exports = {
  ComponentDb,
  CountDb,
};
