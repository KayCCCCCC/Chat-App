import mongoose from "mongoose";

const convertsationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }
    ]
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", convertsationSchema)
export default Conversation