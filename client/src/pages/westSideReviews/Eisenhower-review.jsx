import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Eisenhower = () => {
    const side = 'West';
    const community = 'Kelly';
    const hall = 'Eisenhower';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Eisenhower;