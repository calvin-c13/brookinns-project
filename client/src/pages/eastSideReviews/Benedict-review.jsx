import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Benedict = () => {
    const side = 'East';
    const community = 'H';
    const hall = 'Benedict';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Benedict;
