import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, User, LogOut } from 'lucide-react'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  // 🔥 Mobile icon click handler
  const handleMobileClick = () => {
    if (!isMobileOpen) {
      setIsMobileOpen(true)
    }
  }

  return (
    <>
      {/* ================= DESKTOP SIDEBAR (UNCHANGED) ================= */}
      <div className='hidden md:flex flex-col w-64 min-h-screen bg-black border-r border-white/10'>
        <nav className='flex-1 p-4 mt-24 space-y-3'>
          <Link
            to='/dashboard'
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${
                isActive('/dashboard')
                  ? 'bg-gradient-to-r from-[#00F076]/20 to-[#00F076]/5 border border-[#00F076]/30'
                  : 'hover:bg-white/5'
              }`}
          >
            <div className='w-8 h-8 rounded-lg bg-[#00F076] flex items-center justify-center'>
              <LayoutDashboard size={18} className='text-black' />
            </div>
            <span className='text-white font-medium'>Dashboard</span>
          </Link>

          <Link
            to='/profile'
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${
                isActive('/profile')
                  ? 'bg-gradient-to-r from-[#00F076]/20 to-[#00F076]/5 border border-[#00F076]/30'
                  : 'hover:bg-white/5'
              }`}
          >
            <div className='w-8 h-8 rounded-lg bg-[#00F076] flex items-center justify-center'>
              <User size={18} className='text-black' />
            </div>
            <span className='text-white font-medium'>Profile</span>
          </Link>
        </nav>

        <div className='p-4 border-t border-white/10'>
          <Link
            to='/courses'
            className='flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition'
          >
            <LogOut size={16} className='text-white' />
            <span className='text-sm text-white font-medium'>Logout</span>
          </Link>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobileOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black/50 z-40'
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen bg-black border-r border-white/10 z-50
          transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'w-64' : 'w-16'}
        `}
      >
        <div className='flex flex-col h-full py-6'>
          {/* Menu */}
          <div className='flex flex-col gap-4 mt-16 px-2'>
            {/* Dashboard */}
            <Link
              to='/dashboard'
              onClick={handleMobileClick}
              className={`flex items-center gap-3 p-3 rounded-xl transition
                ${isActive('/dashboard') ? 'bg-[#00F076]' : 'bg-white/5'}
              `}
            >
              <LayoutDashboard
                size={18}
                className={isActive('/dashboard') ? 'text-black' : 'text-white'}
              />
              {isMobileOpen && (
                <span className='text-white font-medium'>Dashboard</span>
              )}
            </Link>

            {/* Profile */}
            <Link
              to='/profile'
              onClick={handleMobileClick}
              className={`flex items-center gap-3 p-3 rounded-xl transition
                ${isActive('/profile') ? 'bg-[#00F076]' : 'bg-white/5'}
              `}
            >
              <User
                size={18}
                className={isActive('/profile') ? 'text-black' : 'text-white'}
              />
              {isMobileOpen && (
                <span className='text-white font-medium'>Profile</span>
              )}
            </Link>
          </div>

          {/* Logout */}
          <div className='mt-auto px-2'>
            <Link
              to='/courses'
              onClick={handleMobileClick}
              className='flex items-center gap-3 p-3 rounded-xl bg-red-600 hover:bg-red-700 transition'
            >
              <LogOut size={18} className='text-white' />
              {isMobileOpen && (
                <span className='text-white font-medium'>Logout</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
