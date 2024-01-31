import mongoose from "mongoose";

const WritingPostSchema = new mongoose.Schema(
    {
        heading: {
            type : String,
            required: true,
        },
        content: {
            type: String,
            required: true,

        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {timestamps: true}
);

export const WritingPost = mongoose.model("WritingPost", WritingPostSchema);