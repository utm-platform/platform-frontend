import { Routes, Route } from 'react-router-dom'
import Index from './pages'
import React from "react";
import Gram from './pages/grammar-EN';
import GramFR from './pages/grammar-FR';
import Dashboard from './pages/dashboard';
import SideBar from './components/SideBar';

function App() {
    return (
        <>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path="/" element={<Index/>} />
            <Route path='*' element={<h1>Error 404</h1>} />
            <Route path="/grammar" element={<Gram/>} />
            <Route path="/play" element={<GramFR/>} />
        </Routes>
        <section >

        </section>
        </>
        
    )
}

export default App
