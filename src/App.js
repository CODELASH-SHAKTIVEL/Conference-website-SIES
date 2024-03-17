import React from 'react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import CallForPaper from './components/CallForPaper';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
   <>
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Callforpaper' element={<CallForPaper/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
