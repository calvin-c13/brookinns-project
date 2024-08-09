import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import EastSide from './pages/EastSide';
import WestSide from './pages/WestSide';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/eastside' element={<EastSide />} />
        <Route path='/westside' element={<WestSide />} />
      </Routes>
    </BrowserRouter>
  );
}
