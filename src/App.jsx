import { Routes, Route } from 'react-router-dom'
import Index from './pages'
import React from "react";
import Nav from './Nav';
import Gram from './pages/grammar-copy';
import Play from './pages/grammar-fr';



function App() {
    return (
        <>
        <Nav/>
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path='*' element={<h1>Error 404</h1>} />
            <Route path="/grammar" element={<Gram/>} />
            <Route path="/play" element={<Play/>} />
        </Routes>
        <section >

        </section>
        </>
        
    )
}

export default App
