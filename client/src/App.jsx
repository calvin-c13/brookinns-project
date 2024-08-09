import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

import East from './pages/East';
import West from './pages/West';

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

        <Route path='/east' element={<East />} />
        { /* East- H com*/}
        <Route path='/east/langmuir' element={<Langmuir />} />
        <Route path='/east/benedict' element={<Benedict />} />
        <Route path='/east/james' element={<James />} />

        { /* East- Mendelsohn com*/}
        <Route path='/east/ammann' element={<Ammann />} />
        <Route path='/east/oneill' element={<Oneill />} />
        <Route path='/east/irving' element={<Irving />} />
        <Route path='/east/gray' element={<Gray />} />

        { /* East- Living learning com*/}
        <Route path='/east/chavez' element={<Chavez />} />
        <Route path='/east/tubman' element={<Tubman />} />


        <Route path='/west' element={<West />} />
        { /* West- Living learning com*/}
        <Route path='/west/Lauterbur' element={<Lauterbur />} />
        <Route path='/west/yang' element={<Yang />} />

        { /* West- Tabler com*/}
        <Route path='/west/chinn' element={<Chinn />} />
        <Route path='/west/douglass' element={<Douglass />} />
        <Route path='/west/dreiser' element={<Dreiser />} />
        <Route path='/west/hand' element={<Hand />} />
        <Route path='/west/toscanini' element={<Toscanini />} />

        { /* West- Roosevelt com*/}
        <Route path='/west/wagner' element={<Wagner />} />
        <Route path='/west/stimson' element={<Stimson />} />
        <Route path='/west/keller' element={<Keller />} />
        <Route path='/west/greeley' element={<Greeley />} />

        { /* West- Kelly com*/}
        <Route path='/west/baruch' element={<Baruch />} />
        <Route path='/west/dewey' element={<Dewey />} />
        <Route path='/west/eisenhower' element={<Eisenhower />} />
        <Route path='/west/hamilton' element={<Hamilton />} />
        <Route path='/west/schick' element={<Schick />} />

        { /* West- Roth com*/}
        <Route path='/west/cardozo' element={<Cardozo />} />
        <Route path='/west/gershwin' element={<Gershwin />} />
        <Route path='/west/hendrix' element={<Hendrix />} />
        <Route path='/west/mount' element={<Mount />} />
        <Route path='/west/whitman' element={<Whitman />} />

        { /* West- West apartments com*/}
        <Route path='/west/westA' element={<WestA />} />
        <Route path='/west/westB' element={<WestB />} />
        <Route path='/west/westC' element={<WestC />} />
        <Route path='/west/westD' element={<WestD />} />
        <Route path='/west/westE' element={<WestE />} />
        <Route path='/west/westF' element={<WestF />} />
        <Route path='/west/westJ' element={<WestJ />} />
        <Route path='/west/westK' element={<WestK />} />

        { /* West- Schomburg apartments com*/}
        <Route path='/west/schomburg' element={<Schomburg />} />

        { /* West- Chapin apartments com*/}
        <Route path='/west/chapin' element={<Chapin />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}