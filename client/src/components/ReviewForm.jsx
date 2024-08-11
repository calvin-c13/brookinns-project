import React, { useState } from 'react';
import { useReview } from '../context/ReviewContext';
import { errorHandler } from '../../../api/utils/error';

const ReviewForm = () => {
    const { side, community, hall } = useReview();

    const [reviewData, setReviewData] = useState({
        name: '',
        major: '',
        academicStanding: '',
        roomNumber: '',
        roomType: '',
        ac: '',
        kitchen: '',
        overall: '',
        buildingQuality: '',
        buildingAmenities: '',
        location: '',
        socialLife: '',
        managementAndStaff: '',
        wouldRecommend: '',
        reviewText: '',
        side: side, // Automatically filled based on context
        community: community, // Automatically filled based on context
        hall: hall // Automatically filled based on context
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            });
        } catch (error) {
            next(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <input type="text" name="name" value={reviewData.name} onChange={handleChange} />
            {/* Other form fields */}
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
