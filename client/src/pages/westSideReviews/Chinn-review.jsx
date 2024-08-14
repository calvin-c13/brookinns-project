import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Chinn = () => {
    const side = 'West';
    const community = 'Tabler';
    const hall = 'Chinn';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Chinn;
