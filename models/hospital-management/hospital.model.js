import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
    {
        hospitalId: {
            type: String,
            required: true,
            unique: true,
        },
        hospitalName: {
            type: String,
            required: true,
        },
        hospitalAddress: {
            type: String,
            required: true
        },
        hospitalContact: {
            type: String,
            required: true,
            unique: true,
        },
        hospitalEmail: {
            type: String,
            required: true,
            unique: true,
        },
        hospitalPassword: {
            type: String,
            required: true,
        },
        
    }
);

export const Hostpital = mongoose.model('Hospital', hospitalSchema);