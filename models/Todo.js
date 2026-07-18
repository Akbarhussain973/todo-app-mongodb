const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

todoSchema.methods.markCompleted = async function () {
  this.completed = true;
  await this.save();
};

todoSchema.methods.markPending = async function () {
  this.completed = false;
  await this.save();
};

todoSchema.statics.completedCount = function (userId) {
  return this.countDocuments({
    owner: userId,
    completed: true,
  });
};

todoSchema.statics.totalCount = function (userId) {
  return this.countDocuments({
    owner: userId,
  });
};

todoSchema.virtual("status").get(function () {
  return this.completed ? "Completed ✅" : "Pending ⏳";
});

todoSchema.pre("save", function () {
  this.description = this.description.trim();

  console.log("Saving Todo...");
});

todoSchema.post("save", function (doc) {
  console.log(`✅ "${doc.description}" saved.`);
});

todoSchema.pre("findOneAndDelete", function () {
  console.log("Deleting Todo...");
});

todoSchema.post("findOneAndDelete", function (doc) {
  if (doc) {
    console.log(`🗑 Deleted: ${doc.description}`);
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
