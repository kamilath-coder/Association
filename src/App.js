import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./PAGES/Home/Home"
import About from './PAGES/About/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/A-propos" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
