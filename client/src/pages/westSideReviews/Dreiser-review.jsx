import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Dreiser = () => {
    const side = 'West';
    const community = 'Tabler';
    const hall = 'Dreiser';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Dreiser;