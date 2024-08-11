import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

export default function Hendrix() {
    return (
        <div>
            <h1>Hendrix</h1>
            <p>Welcome to Hendrix Hall! Here you can find more information and reviews about the dorm.</p>
            <Link to="/east/hendrix/add-review" style={{ textDecoration: 'none', color: 'blue' }}>
                <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Add a Review
                </button>
            </Link>
        </div>
    );
}
