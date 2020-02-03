import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './Components/Topnav';
import Banner from './Components/Banner';
import Info from './Components/Info';
import News from './Components/News';
import References from './Components/References';
import Newsletter from './Components/Newsletter';
import BottomFooter from './Components/BottomFooter';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Banner />
      <Info />
      <News />
      <References />
      <Newsletter />
      <BottomFooter />
    </div>
  );
}

export default App;
