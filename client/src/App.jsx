import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

import EastSide from './pages/EastSide';
import WestSide from './pages/WestSide';

import Langmuir from './pages/Langmuir';
import Benedict from './pages/Benedict';
import James from './pages/James';

import Ammann from './pages/Ammann';
import Oneill from './pages/Oneill';
import Irving from './pages/Irving';
import Gray from './pages/Gray';

import Chavez from './pages/Chavez';
import Tubman from './pages/Tubman';
import Lauterbur from './pages/Lauterbur';
import Yang from './pages/Yang';

import Chinn from './pages/Chinn';
import Douglass from './pages/Douglass';
import Dreiser from './pages/Dreiser';
import Hand from './pages/Hand';
import Toscanini from './pages/Toscanini';

import Wagner from './pages/Wagner';
import Stimson from './pages/Stimson';
import Keller from './pages/Keller';
import Greeley from './pages/Greeley';

import Baruch from './pages/Baruch';
import Dewey from './pages/Dewey';
import Eisenhower from './pages/Eisenhower';
import Hamilton from './pages/Hamilton';
import Schick from './pages/Schick';

import Cardozo from './pages/Cardozo';
import Gershwin from './pages/Gershwin';
import Hendrix from './pages/Hendrix';
import Mount from './pages/Mount';
import Whitman from './pages/Whitman';

import WestA from './pages/WestA';
import WestB from './pages/WestB';
import WestC from './pages/WestC';
import WestD from './pages/WestD';
import WestE from './pages/WestE';
import WestF from './pages/WestF';
import WestJ from './pages/WestJ';
import WestK from './pages/WestK';

import Schomburg from './pages/Schomburg';

import Chapin from './pages/Chapin';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path='/eastside' element={<EastSide />} />
        { /* East- H com*/}
        <Route path='/eastside/langmuir' element={<Langmuir />} />
        <Route path='/eastside/benedict' element={<Benedict />} />
        <Route path='/eastside/james' element={<James />} />

        { /* East- Mendelsohn com*/}
        <Route path='/eastside/ammann' element={<Ammann />} />
        <Route path='/eastside/oneill' element={<Oneill />} />
        <Route path='/eastside/irving' element={<Irving />} />
        <Route path='/eastside/gray' element={<Gray />} />

        { /* East- Living learning com*/}
        <Route path='/eastside/chavez' element={<Chavez />} />
        <Route path='/eastside/tubman' element={<Tubman />} />


        <Route path='/westside' element={<WestSide />} />
        { /* West- Living learning com*/}
        <Route path='/westside/Lauterbur' element={<Lauterbur />} />
        <Route path='/westside/yang' element={<Yang />} />

        { /* West- Tabler com*/}
        <Route path='/westside/chinn' element={<Chinn />} />
        <Route path='/westside/douglass' element={<Douglass />} />
        <Route path='/westside/dreiser' element={<Dreiser />} />
        <Route path='/westside/hand' element={<Hand />} />
        <Route path='/westside/toscanini' element={<Toscanini />} />

        { /* West- Roosevelt com*/}
        <Route path='/westside/wagner' element={<Wagner />} />
        <Route path='/westside/stimson' element={<Stimson />} />
        <Route path='/westside/keller' element={<Keller />} />
        <Route path='/westside/greeley' element={<Greeley />} />

        { /* West- Kelly com*/}
        <Route path='/westside/baruch' element={<Baruch />} />
        <Route path='/westside/dewey' element={<Dewey />} />
        <Route path='/westside/eisenhower' element={<Eisenhower />} />
        <Route path='/westside/hamilton' element={<Hamilton />} />
        <Route path='/westside/schick' element={<Schick />} />

        { /* West- Roth com*/}
        <Route path='/westside/cardozo' element={<Cardozo />} />
        <Route path='/westside/gershwin' element={<Gershwin />} />
        <Route path='/westside/hendrix' element={<Hendrix />} />
        <Route path='/westside/mount' element={<Mount />} />
        <Route path='/westside/whitman' element={<Whitman />} />

        { /* West- West apartments com*/}
        <Route path='/westside/westA' element={<WestA />} />
        <Route path='/westside/westB' element={<WestB />} />
        <Route path='/westside/westC' element={<WestC />} />
        <Route path='/westside/westD' element={<WestD />} />
        <Route path='/westside/westE' element={<WestE />} />
        <Route path='/westside/westF' element={<WestF />} />
        <Route path='/westside/westJ' element={<WestJ />} />
        <Route path='/westside/westK' element={<WestK />} />

        { /* West- Schomburg apartments com*/}
        <Route path='/westside/schomburg' element={<Schomburg />} />

        { /* West- Chapin apartments com*/}
        <Route path='/westside/chapin' element={<Chapin />} />

      </Routes>
    </BrowserRouter>
  );
}
