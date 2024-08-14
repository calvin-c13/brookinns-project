import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestB = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West B';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestB;