import  {Schema, model} from "mongoose";

const anonymousRequestSchema = new Schema({

    title : {
        type: String,
        trim: true ,
        required: true,
    },
    description : {
        type: String,
        trim: true,
        required: true, 
    },
    goal_amound: {
        type: Number,
        required: true
    },
    raised_amount : {
        type: Number,
        required: true, 
        default : 0 ,
    },

    contact_link : {
        type: String, 
        required: true, 

    },

    status : {
        type: Boolean,
        default : false
    },
    urgent: {
        type : Boolean,
        default: false
    },

    is_deleted: {
        type: Boolean,
        default: false, 
    }

    
}, {
    timestamps: true
});

export const AnonymousRequestmodel = model("anonymous_request", anonymousRequestSchema);