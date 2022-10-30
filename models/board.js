const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  topics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
});

module.exports = mongoose.model("Board", boardSchema);
