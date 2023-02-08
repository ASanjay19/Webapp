import './App.css';
//import Footer from './Footer';
//import { Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import Contact from './Contact'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="about" element={<About />} ></Route>
      <Route path="contact" element={<Contact/>} ></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
