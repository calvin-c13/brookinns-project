import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Gershwin = () => {
    const side = 'West';
    const community = 'Roth';
    const hall = 'Gershwin';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Gershwin;