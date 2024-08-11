import React from 'react';
import ReviewForm from '../../../components/ReviewForm';

const Gray = () => {
    // The side and community information is known based on the component
    const side = 'East';
    const community = 'Gray';

    // Assuming you have a review form component
    return (
        <div>
            <h1>{community}</h1>
            {/* Pass side and community as props to the ReviewForm component */}
            <ReviewForm side={side} community={community} />
        </div>
    );
};

export default Gray;
