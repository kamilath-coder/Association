import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./PAGES/Home/Home"
import About from './PAGES/About/About';
import Activite from './PAGES/Activite/Activite';
import ActiviteVoirplus from './PAGES/Activite/VoirPlus'
import Membre from './PAGES/About/Membre';

import Nouvelle from './PAGES/Nouvelle/Nouvelle';
import NouvelleVoirplus from './PAGES/Nouvelle/VoirPlus'
import Contact from './PAGES/Contact/Contact'
import {SlideHome} from "./COMPONENTS/SlideHome/SlideHome"


function App() {
  return (
    
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/A-propos" element={<About/>}/>
        <Route path="/Carousel" element={<SlideHome/>}/>
        <Route path="/A-propos/membre/:id" element={<Membre/>}/>
        <Route path="/Nos-activites" element={<Activite/>}/>
        <Route path="/Nos-activites/Voir-plus/:id" element={<ActiviteVoirplus/>}/>
        <Route path="/Les-nouvelles" element={<Nouvelle/>}/>
        {/* <Route path="/Les-nouvelles/voir-plus" element={<NouvelleVoirplus/>}/> */}
        <Route path="/Les-nouvelles/voir-plus/:id" element={<NouvelleVoirplus/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
