import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './components/pages/HomePage/HomePage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import CartPage from './components/pages/CartPage/CartPage';
import OrderSummaryPage from './components/pages/OrderSummaryPage/OrderSummaryPage';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';

import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/layout/NavBar/NavBar.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App d-flex flex-column min-vh-100">
        <BrowserRouter>
          <NavBar />
          <main className="flex-fill mainContent">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order-summary" element={<OrderSummaryPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}


export default App;
