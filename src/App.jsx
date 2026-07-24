import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home2 from './pages/Home2';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Technology from './pages/Technology';
import Achievements from './pages/Achievements';
import RoadMap from './pages/RoadMap';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home2 />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="industries" element={<Industries />} />
          <Route path="technology" element={<Technology />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="roadmap" element={<RoadMap />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
