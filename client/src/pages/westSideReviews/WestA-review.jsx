import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestA = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West A';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestA;