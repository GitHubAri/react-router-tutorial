import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
