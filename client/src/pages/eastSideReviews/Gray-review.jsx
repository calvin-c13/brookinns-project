import React from 'react';
import ReviewForm from '../../../components/ReviewForm';

const Gray = () => {
    const side = 'East';
    const community = 'Mendelsohn';
    const hall = 'Gray';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Gray;
