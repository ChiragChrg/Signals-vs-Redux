import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Redux from './pages/redux/Redux'
import Signal from './pages/signal/Signal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/signal" element={<Signal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App