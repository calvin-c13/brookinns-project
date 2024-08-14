import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Irving = () => {
    const side = 'East';
    const community = 'Mendelsohn';
    const hall = 'Irving';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Irving;
