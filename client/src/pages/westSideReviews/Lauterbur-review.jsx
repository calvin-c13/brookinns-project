import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Lauterbur = () => {
    const side = 'West';
    const community = 'Living learning';
    const hall = 'Lauterbur';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Lauterbur;
