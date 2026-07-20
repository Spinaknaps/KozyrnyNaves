import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Calculator from './pages/Calculator/Calculator'
import Contacts from './pages/Contacts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App