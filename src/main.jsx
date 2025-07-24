import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
// import Restaurant from './pages/Restaurant';
// import Cart from './pages/Cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* <Route path="restaurant/:id" element={<Restaurant />} />
        <Route path="cart" element={<Cart />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
