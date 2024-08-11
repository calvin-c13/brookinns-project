import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import East from './pages/eastSide/East';
import West from './pages/westSide/West';
import { ReviewProvider } from './context/ReviewContext'; // Import ReviewProvider from context

const eastSidePages = [
    'Langmuir', 'Benedict', 'James',
    'Ammann', 'Oneill', 'Irving', 'Gray',
    'Chavez', 'Tubman'
];

const westSidePages = [
    'Lauterbur', 'Yang',
    'Chinn', 'Douglass', 'Dreiser', 'Hand', 'Toscanini',
    'Wagner', 'Stimson', 'Keller', 'Greeley',
    'Baruch', 'Dewey', 'Eisenhower', 'Hamilton', 'Schick',
    'Cardozo', 'Gershwin', 'Hendrix', 'Mount', 'Whitman',
    'WestA', 'WestB', 'WestC', 'WestD', 'WestE', 'WestF', 'WestJ', 'WestK',
    'Schomburg', 'Chapin'
];

// Import page components lazily
const importPageComponent = (side, page) => {
    return React.lazy(() => import(`./pages/${side}/${page}`));
};

// Import review form components lazily
const importReviewFormComponent = (side, page) => {
    return React.lazy(() => import(`./pages/${side}/${page}-review`));
};

export default function App() {
    return (
        <BrowserRouter>
            <ReviewProvider> {/* Wrap the application in ReviewProvider */}
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/east" element={<East />} />
                    <Route path="/west" element={<West />} />

                    {/* Routes for east side pages */}
                    {eastSidePages.map(page => {
                        const Component = importPageComponent('eastSide', page);
                        const ReviewFormComponent = importReviewFormComponent('eastSide', page.toLowerCase());
                        return (
                            <React.Fragment key={page}>
                                <Route
                                    path={`/east/${page.toLowerCase()}`}
                                    element={<React.Suspense fallback={<div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100vh',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }}>Loading...</div>}><Component /></React.Suspense>}
                                />
                                <Route
                                    path={`/east/${page.toLowerCase()}/add-review`}
                                    element={<React.Suspense fallback={<div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100vh',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }}>Loading...</div>}><ReviewFormComponent /></React.Suspense>}
                                />
                            </React.Fragment>
                        );
                    })}

                    {/* Routes for west side pages */}
                    {westSidePages.map(page => {
                        const Component = importPageComponent('westSide', page);
                        const ReviewFormComponent = importReviewFormComponent('westSide', page.toLowerCase());
                        return (
                            <React.Fragment key={page}>
                                <Route
                                    path={`/west/${page.toLowerCase()}`}
                                    element={<React.Suspense fallback={<div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100vh',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }}>Loading...</div>}><Component /></React.Suspense>}
                                />
                                <Route
                                    path={`/west/${page.toLowerCase()}/add-review`}
                                    element={<React.Suspense fallback={<div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100vh',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }}>Loading...</div>}><ReviewFormComponent /></React.Suspense>}
                                />
                            </React.Fragment>
                        );
                    })}
                </Routes>
                <Footer />
            </ReviewProvider> {/* End ReviewProvider */}
        </BrowserRouter>
    );
}
