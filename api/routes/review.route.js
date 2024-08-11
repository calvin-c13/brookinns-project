import express from 'express';
import { getAllReviews, getReviewsBySide, getReviewsByCommunity, createReview } from '../controllers/review.controller.js';

const router = express.Router();

router.get('/', getAllReviews);
router.get('/:side', getReviewsBySide);
router.get('/:side/:community', getReviewsByCommunity);
router.post('/', createReview);

export default router;
