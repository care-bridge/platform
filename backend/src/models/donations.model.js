import {Schema, model} from "mongoose"

const donationsSchema = new Schema ({
    donor_id : {
        type: Schema.Types.ObjectId,
        ref : "users"
    },
    hospital_request_id : {
        type: Schema.Types.ObjectId,
        ref : "hospitals_requests"
    },
    anonymous_request_id : {
        type: Schema.Types.ObjectId,
        ref : "anonymous_request"
    },
    amount : {
        type : Number, 
        required: true,
        default : 0 
    },
    message : {
        type : String, 
    },
    donated_at : {
        type: Date,
        required: true
    },

})

export const DonationModel = model("donations", donationsSchema);