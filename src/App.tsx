import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Redux from './pages/redux/Redux'
import Signal from './pages/signal/Signal'
import MultiSignal from './pages/muilt-signal/MultiSignal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/multi-signal" element={<MultiSignal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App