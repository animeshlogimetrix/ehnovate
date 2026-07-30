import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

const Home2 = lazy(() => import('./pages/Home2'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Industries = lazy(() => import('./pages/Industries'));
const Technology = lazy(() => import('./pages/Technology'));
const Achievements = lazy(() => import('./pages/Achievements'));
const RoadMap = lazy(() => import('./pages/RoadMap'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div id="xb-loadding" className="xb-loader style-2"><div className="xb-dual-ring"></div></div>}>
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
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
