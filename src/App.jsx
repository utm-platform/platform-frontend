import { Routes, Route } from 'react-router-dom'
import Index from './pages'
import Studenthome from './pages/Studenthome'
import React from "react";
import Student from './pages/Studenthome';
import Navbar from './Navbar';
import Gram from './pages/grammar';


function App() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
        <section>
            <Gram/>
            
        </section>
        </>
        
    )
}

export default App
