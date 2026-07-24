import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  useEffect(() => {
    // Append main.js exactly once per page load.
    // Since Header.jsx now uses native <a href> tags for navigation, every click
    // triggers a hard page reload. This prevents jQuery bindings from duplicating
    // and completely fixes the unresponsiveness caused by stacking requestAnimationFrame loops.
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="body_wrap">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
