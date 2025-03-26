const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    catagory: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    isPinned: {
      type: Boolean,
    },
    isArchived: {
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
    },
    createdAt: {
      type: Date,
    },
    updataedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports= mongoose.model("Notes", notesSchema);