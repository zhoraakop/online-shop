import React from 'react'
import './index.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title'
import Advantages from './components/Advantages/Advantages';
import Products from './components/Products/Products';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Advantages />
      <Products />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
