import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import East from './pages/eastSide/East';
import West from './pages/westSide/West';

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

const importPageComponent = (side, page) => {
    return React.lazy(() => import(`./pages/${side}/${page}`));
};

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/east" element={<East />} />
                <Route path="/west" element={<West />} />

                {eastSidePages.map(page => {
                    const Component = importPageComponent('eastSide', page);
                    return (
                        <Route
                            key={page}
                            path={`/east/${page.toLowerCase()}`}
                            element={<React.Suspense fallback={<div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                                fontSize: '24px',
                                fontWeight: 'bold'
                            }}></div>}><Component /></React.Suspense>}
                        />
                    );
                })}

                {westSidePages.map(page => {
                    const Component = importPageComponent('westSide', page);
                    return (
                        <Route
                            key={page}
                            path={`/west/${page.toLowerCase()}`}
                            element={<React.Suspense fallback={<div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                                fontSize: '24px',
                                fontWeight: 'bold'
                            }}></div>}><Component /></React.Suspense>}
                        />
                    );
                })}
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}
