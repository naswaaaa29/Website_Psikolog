import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

// Lazy loading untuk halaman
const Home = lazy(() => import('./pages/Home/Home'));
const Artikel = lazy(() => import('./pages/Artikel/Artikel'));
const Psikolog = lazy(() => import('./pages/Psikolog/Psikolog'));
const Kontak = lazy(() => import('./pages/Kontak/Kontak'));
const Doegram = lazy(() => import('./pages/Doegram'));

const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route path="/doegram" element={<Layout><Doegram /></Layout>} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/artikel" element={<Layout><Artikel /></Layout>} />
          <Route path="/psikolog" element={<Layout><Psikolog /></Layout>} />
          <Route path="/Kontak" element={<Layout><Kontak /></Layout>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App; 