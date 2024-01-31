import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema(
    {
        doctorId: {
            type: String,
            required: true,
            unique: true,
        },
        doctorName: {
            type: String,
            required: true,
        },
        doctorAddress: {
            type: String,
            required: true
        },
        doctorContact: {
            type: String,
            required: true,
            unique: true,
        },
        doctorEmail: {
            type: String,
            required: true,
            unique: true,
        },
        doctorPassword: {
            type: String,
            required: true,
        },
        doctorSpecialization: {
            type: String,
            required: true,
        },
        doctorExperience: {
            type: String,
            required: true,
        },
        doctorQualification: {
            type: String,
            required: true,
        },
        doctorGender: {
            type: String,
            enum: ["male", "female", "other"],
            required: true,
        },      
        salary: {
            type: Number,
            required: true,
        },
        doctorStatus: {
            type: String,
            enum: ["active", "inactive"],
            required: true,
        },
        doctorImage: {
            type: String,
        },
    },
    {timestamps: true}
);

export const Doctor = mongoose.model('Doctor', DoctorSchema);