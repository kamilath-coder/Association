import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./PAGES/Home/Home"
import About from './PAGES/About/About';
import Activite from './PAGES/Activite/Activite';
import ActiviteVoirplus from './PAGES/Activite/VoirPlus'
import Membre from './PAGES/About/Membre';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/A-propos" element={<About/>}/>
        <Route path="/A-propos/membre" element={<Membre/>}/>
        <Route path="/Nos-activites" element={<Activite/>}/>
        <Route path="/Nos-activites/Voir-plus" element={<ActiviteVoirplus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
