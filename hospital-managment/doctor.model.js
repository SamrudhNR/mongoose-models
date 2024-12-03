import mongoose from "mongoose";

const hospitalHours= new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    },
    hours:{
        type:Number
    }
});


const doctorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualifications:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:{
        type:[hospitalHours]
    }
},{timeStamps:true});

export const Doctor= mongoose.model('Doctor',doctorSchema);