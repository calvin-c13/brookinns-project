import express from 'express';
import { getAllReviews, getReviewsBySide, getReviewsByCommunity, getReviewsByHall, createReview } from '../controllers/review.controller.js';

const router = express.Router();

router.get('/', getAllReviews);
router.get('/:side', getReviewsBySide);
router.get('/:side/:community', getReviewsByCommunity);
router.get('/:side/:community/:hall', getReviewsByHall);
router.post('/', createReview);

export default router;
