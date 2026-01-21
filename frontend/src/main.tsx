import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import HomePage from './pages/HomePage'
import Curriculum from './pages/Curriculum'
import Schedule from './pages/Schedule'
import Instructor from './pages/Instructor'
import FAQ from './pages/Faq'
import LoginPage from './components/LoginPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
