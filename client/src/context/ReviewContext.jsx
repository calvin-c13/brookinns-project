import React, { createContext, useState, useContext } from 'react';

// Create the context
const ReviewContext = createContext();

// Create a provider component
export const ReviewProvider = ({ children }) => {
    // State to store side and community
    const [side, setSide] = useState('');
    const [community, setCommunity] = useState('');

    return (
        <ReviewContext.Provider value={{ side, setSide, community, setCommunity }}>
            {children}
        </ReviewContext.Provider>
    );
};

// Custom hook to use the context
export const useReview = () => useContext(ReviewContext);