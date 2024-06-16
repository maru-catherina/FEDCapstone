import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserve from './pages/Reserve';
import HomePage from './pages/HomePage';
import ConfirmedBooking from './components/ConfirmedBooking'

import '../src/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/reserve" element={<Reserve />}/>
      <Route path="/confirmed" element={<ConfirmedBooking />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
