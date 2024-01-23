import React from 'react';
import ReactDOM from 'react-dom/client';
import PageWrapper from './js/views/PageWrapper';
import RendersPage from './js/views/RendersPage';
import CodingPage from './js/views/CodingPage';
import AboutPage from './js/views/AboutPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route path="renders" element={<RendersPage />} />
          <Route path="coding" element={<CodingPage />} />
          <Route index element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
