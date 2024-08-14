import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Tubman = () => {
    const side = 'East';
    const community = 'Living learning';
    const hall = 'Tubman';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Tubman;
