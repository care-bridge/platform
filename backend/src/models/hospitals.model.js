import  {Schema, model} from "mongoose";

const hospitalsSchema = new Schema({
    name: {
        type: String,
        unique: true, 
        trim: true,
        required: true,
    },
    email : {
        type: String,
        unique: true,
        trim: true ,
        required: true,
    },
    address : {
        type: String,
        trim: true,
        required: true, 
    },
    password_hash: {
        type: String
    },

    is_active: {
        type: Boolean,
        default : true
    },
    is_verified : {
        type: Boolean,
        default: false
    },

    documents : [{
        type: Schema.Types.ObjectId,
        ref : "documents"
    }]
    
}, {
    timestamps: true
});

export const Hospitalsmodel = model("hospitals", hospitalsSchema);