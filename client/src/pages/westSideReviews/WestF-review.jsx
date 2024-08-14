import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestF = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West F';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestF;