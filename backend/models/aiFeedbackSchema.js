import mongoose from 'mongoose';

const aiFeedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  type: {
    type: String, // "interview" | "resume" | "code"
  },

  input: String,  // question / code / resume text
  output: String, // AI response

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AIFeedback = mongoose.model("AIFeedback", aiFeedbackSchema);
export default AIFeedback;