import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Stimson = () => {
    const side = 'West';
    const community = 'Roosevelt';
    const hall = 'Stimson';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Stimson;