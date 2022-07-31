import { Routes, Route } from 'react-router-dom'
import Index from './pages'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
    )
}

export default App
