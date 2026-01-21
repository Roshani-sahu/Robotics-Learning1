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
import SignUpPage from './components/SignUpPage'
import CoursePage from './pages/CoursePage'
import Dashboard from './pages/Dashboard'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/Layout'

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
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
         <Route element={<Layout />}>
                 <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/profile' element={<ProfilePage />} />
         </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
