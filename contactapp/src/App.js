import React from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<h1>I am add comonent</h1>}/>
        <Route path="/edit/:id" element={<h1>I am edit component</h1>}/>
        
        
      </Routes>
      
     
    </div>
  );
}

export default App;
