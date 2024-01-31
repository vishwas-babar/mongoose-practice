import mongoose from 'mongoose';

const MedicalRecordsSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
        },
        patientDeseaes: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        },
        consultedDoctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
        },
        date: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        },
        patientName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        },
        doctorEmail: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        },
        doctorPhone: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        },
        patientPhone: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        },
    },
);

export const MedicalRecords = mongoose.model('MedicalRecords', MedicalRecordsSchema);