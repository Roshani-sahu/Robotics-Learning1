import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import HomePage from './pages/HomePage'
import Curriculum from './pages/Curriculum'
import Schedule from './pages/Schedule'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/schedule' element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
