import Review from '../models/review.model';
import { errorHandler } from "../utils/error.js";


// Get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};

// Get reviews by side (east or west)
exports.getReviewsBySide = async (req, res) => {
    const side = req.params.side.toLowerCase(); // 'east' or 'west'
    try {
        const reviews = await Review.find({ side });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: `Error fetching reviews for ${side} side`, error });
    }
};

// Get reviews by community on a specific side
exports.getReviewsByCommunity = async (req, res) => {
    const side = req.params.side.toLowerCase(); // 'east' or 'west'
    const community = req.params.community.toLowerCase(); // e.g., 'h', 'mendelsohn'
    try {
        const reviews = await Review.find({ side, community });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: `Error fetching reviews for ${community} on ${side} side`, error });
    }
};

// Create a new review
exports.createReview = async (req, res) => {
    const { side, community, dorm, name, major, academicStanding, roomType, ac, kitchen, overallExperience, buildingQuality, buildingAmenities, location, socialLife, managementAndStaff, recommend, reviewText } = req.body;

    const newReview = new Review({
        side,
        community,
        dorm,
        name,
        major,
        academicStanding,
        roomType,
        ac,
        kitchen,
        overallExperience,
        buildingQuality,
        buildingAmenities,
        location,
        socialLife,
        managementAndStaff,
        recommend,
        reviewText
    });

    try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error });
    }
};
