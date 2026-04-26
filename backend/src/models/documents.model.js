import { Schema, model } from "mongoose";

const documentsSchema = new Schema({
    filename : {
        type: String,
        required: true,
        unique: true
    },
    file_url : {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})

export const DocumentsModel = model("documents", documentsSchema);