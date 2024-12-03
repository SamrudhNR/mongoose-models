import mongoose from "mongoose";


const patientInfo= new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    },
    diagonsedWith:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    }
});

const medical_recordSchema=new mongoose.Schema({
    patientname:{
        type:[patientInfo]
    },
    doctorname:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }

},{timeStamps:true});

export const MedicalRecord= mongoose.model('MedicalRecord',medical_recordSchema);