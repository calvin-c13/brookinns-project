import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Yang = () => {
    const side = 'West';
    const community = 'Living learning';
    const hall = 'Yang';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Yang;
