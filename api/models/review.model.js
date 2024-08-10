import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    major: {
        type: String,
        required: true,
        trim: true
    },
    academicStanding: {
        type: String,
        enum: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate'],
        required: true
    },
    roomType: {
        type: String,
        enum: ['Single', 'Double', 'Triple', 'Suite'],
        required: true
    },
    ac: {
        type: String,
        enum: ['Yes', 'No', 'Central Air', 'Window Unit'],
        required: true
    },
    kitchen: {
        type: Boolean,
        required: true
    },
    overallExperience: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    buildingQuality: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    buildingAmenities: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    location: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    socialLife: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    managementAndStaff: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    wouldRecommend: {
        type: String,
        enum: ['Yes', 'Neutral', 'No'],
        required: true
    },
    reviewText: {
        type: String,
        trim: true
    }
}, { timestamps: true });

// Create the model from the schema
const Review = mongoose.model('Review', ReviewSchema);

export default Review;