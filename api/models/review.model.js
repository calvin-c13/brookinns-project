import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    major: {
        type: String,
        trim: true
    },
    academicStanding: {
        type: String,
        enum: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate'],
    },
    roomNumber: {
        type: String,
        trim: true
    },
    roomType: {
        type: String,
        enum: ['Single', 'Double', 'Triple'],
    },
    ac: {
        type: String,
        enum: ['Yes', 'No'],
    },
    kitchen: {
        type: String,
        enum: ['Yes', 'No'],
    },
    overall: {
        type: Number,
        min: 0.5,
        max: 5,
        required: true
    },
    buildingQuality: {
        type: Number,
        min: 0.5,
        max: 5,
        required: true
    },
    buildingAmenities: {
        type: Number,
        min: 0.5,
        max: 5,
        required: true
    },
    location: {
        type: Number,
        min: 0.5,
        max: 5,
        required: true
    },
    socialLife: {
        type: Number,
        min: 0.5,
        max: 5,
        required: true
    },
    managementAndStaff: {
        type: Number,
        min: 0.5,
        max: 5,
        required: true
    },
    wouldRecommend: {
        type: String,
        enum: ['Highly likely', 'Likely', 'Neutral', 'Unlikely', 'Highly unlikely'],
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