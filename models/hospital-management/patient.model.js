import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema(
    {
        patientId: {
            type: String,
            required: true,
            unique: true,
        },
        patientName: {
            type: String,
            required: true,
        },
        patientAge: {
            type: Number,
            required: true,
        },
        patientGender: {
            type: String,
            enum: ["male", "female", "other"],
            required: true,
        },
        patientAddress: {
            type: String,
            required: true,
        },
        patientPhone: {
            type: Number,
            required: true,
        },
        patientBloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true,
        },
        patientDisease: {
            type: String,
            required: true,
            enum: ["cancer", "heart disease", "diabetes", "asthma", "kidney disease", "stroke", "depression", "obesity", "alzheimer", "oral health", "injury", "hiv/aids", "parkinson", "multiple sclerosis", "high blood pressure", "thyroid disease", "hepatitis", "pneumonia", "tuberculosis", "malaria", "dengue", "chikungunya", "typhoid", "cholera", "ebola", "coronavirus", "others"],
        },
        patientDoctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        },
        patientRoom: {
            type: String,
            required: true,
        },
        patientAdmitDate: {
            type: Date,
            required: true,
        },
        patientDischargeDate: {
            type: Date,
            required: true,
        },
        patientBill: {
            type: Number,
            required: true,
        },
        patientStatus: {
            type: String,
            required: true,
            enum: ["admitted", "discharged"],
        },
    },
    {timestamps: true}
);

export const Patient = mongoose.model('Patient', PatientSchema);