import  {Schema, model} from "mongoose";

const hospitalRequestsSchema = new Schema({
    hospital_id: {
        type: Schema.Types.ObjectId,
        ref : "hospitals"
    },

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

    status : {
        type: Boolean
    },

    is_deleted: {
        type: Boolean,
        default: false, 
    }

    
}, {
    timestamps: true
});

export const HospitalRequestsmodel = model("hospital_requests", hospitalRequestsSchema);