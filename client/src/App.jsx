import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

import East from './pages/eastSide/East';
import West from './pages/westSide/West';

import Langmuir from './pages/eastSide/Langmuir';
import Benedict from './pages/eastSide/Benedict';
import James from './pages/eastSide/James';

import Ammann from './pages/eastSide/Ammann';
import Oneill from './pages/eastSide/Oneill';
import Irving from './pages/eastSide/Irving';
import Gray from './pages/eastSide/Gray';

import Chavez from './pages/eastSide/Chavez';
import Tubman from './pages/eastSide/Tubman';
import Lauterbur from './pages/westSide/Lauterbur';
import Yang from './pages/westSide/Yang';

import Chinn from './pages/westSide/Chinn';
import Douglass from './pages/westSide/Douglass';
import Dreiser from './pages/westSide/Dreiser';
import Hand from './pages/westSide/Hand';
import Toscanini from './pages/westSide/Toscanini';

import Wagner from './pages/westSide/Wagner';
import Stimson from './pages/westSide/Stimson';
import Keller from './pages/westSide/Keller';
import Greeley from './pages/westSide/Greeley';

import Baruch from './pages/westSide/Baruch';
import Dewey from './pages/westSide/Dewey';
import Eisenhower from './pages/westSide/Eisenhower';
import Hamilton from './pages/westSide/Hamilton';
import Schick from './pages/westSide/Schick';

import Cardozo from './pages/westSide/Cardozo';
import Gershwin from './pages/westSide/Gershwin';
import Hendrix from './pages/westSide/Hendrix';
import Mount from './pages/westSide/Mount';
import Whitman from './pages/westSide/Whitman';

import WestA from './pages/westSide/WestA';
import WestB from './pages/westSide/WestB';
import WestC from './pages/westSide/WestC';
import WestD from './pages/westSide/WestD';
import WestE from './pages/westSide/WestE';
import WestF from './pages/westSide/WestF';
import WestJ from './pages/westSide/WestJ';
import WestK from './pages/westSide/WestK';

import Schomburg from './pages/westSide/Schomburg';

import Chapin from './pages/westSide/Chapin';

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