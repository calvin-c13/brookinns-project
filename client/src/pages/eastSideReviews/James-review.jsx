import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const James = () => {
    const side = 'East';
    const community = 'H';
    const hall = 'James';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default James;
