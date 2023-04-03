import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
