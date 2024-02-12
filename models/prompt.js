import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required..."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required..."],
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
