import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import MainVideo from './MainVideo';


function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Footer />
      <MainVideo />
    </div>
  );
}

export default App;