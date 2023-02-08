import './Home.css';
//import Footer from './Footer';
//import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';
import { Outlet, Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <header className="App-header">
         <Header title="Articles"/>
      </header>

     <div className='mainscope'>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
   
      <footer className='footer'>
        <Footer/>
      </footer>

    </div>
    
  );
}

export default Home;
