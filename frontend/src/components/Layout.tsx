import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header2 from '../components/Header2'

const Layout: React.FC = () => {
  return (
    <div className='min-h-screen bg-black text-white'>

      {/* ===== HEADER ===== */}
      <Header2 />

      {/* ===== MAIN WRAPPER ===== */}
      <div className='flex pt-24'>

        {/* ===== SIDEBAR ===== */}
        <Sidebar />

        {/* ===== PAGE CONTENT ===== */}
        <main
          className='
            flex-1
            px-6
            py-6
            md:ml-64
            transition-all
          '
        >
          {/* Prevent content going under header */}
          <div className='max-w-[1400px] mx-auto'>
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  )
}

export default Layout
