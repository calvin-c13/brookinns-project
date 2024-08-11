import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

export default function Langmuir() {
    return (
        <div>
            <h1>Langmuir</h1>
            <p>Welcome to Langmuir Hall! Here you can find more information and reviews about the dorm.</p>
            <Link to="/east/langmuir/add-review" style={{ textDecoration: 'none', color: 'blue' }}>
                <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Add a Review
                </button>
            </Link>
        </div>
    );
}
