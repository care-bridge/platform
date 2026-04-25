import mongoose, {Schema, model} from "mongoose";

const usersSchema = new Schema({
    fullname: {
        type: String,
        unique: true, 
        trim: true,
        required: true,
    },
    username : {
        type: String,
        unique: true,
        trim: true ,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true, 
    },
    password_hash: {
        type: String
    },
    is_Active: {
        type: Boolean,
        default : true
    },
    
    role : {
        type: String, 
        enum : ["admin", "user"],
        default : "user",
    }
}, {
    timestamps: true
});

export const UsersModel = model("users", usersSchema);