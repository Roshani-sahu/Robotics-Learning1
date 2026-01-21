import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, User, LogOut } from 'lucide-react'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  // 👉 Mobile thin mode click = only expand sidebar
  const handleExpandOnly = () => {
    if (!isMobileOpen) {
      setIsMobileOpen(true)
    }
  }

  // 👉 Real navigation (only when sidebar is open)
  const handleNavigate = (path: string) => {
    navigate(path)
    setIsMobileOpen(false)
  }

  return (
    <>
      {/* ================= DESKTOP SIDEBAR (UNCHANGED) ================= */}
      <div className='hidden md:flex flex-col w-64 min-h-screen bg-black border-r border-white/10'>
        <nav className='flex-1 p-4 mt-24 space-y-3'>
          <Link
            to='/dashboard'
            className={`flex items-center gap-3 px-4 py-3 rounded-xl
              ${
                isActive('/dashboard')
                  ? 'bg-[#00F076]/20 border border-[#00F076]/30'
                  : 'hover:bg-white/5'
              }`}
          >
            <LayoutDashboard size={18} className='text-[#00F076]' />
            <span className='text-white'>Dashboard</span>
          </Link>

          <Link
            to='/profile'
            className={`flex items-center gap-3 px-4 py-3 rounded-xl
              ${
                isActive('/profile')
                  ? 'bg-[#00F076]/20 border border-[#00F076]/30'
                  : 'hover:bg-white/5'
              }`}
          >
            <User size={18} className='text-[#00F076]' />
            <span className='text-white'>Profile</span>
          </Link>
        </nav>

        <div className='p-4 border-t border-white/10'>
          <Link
            to='/courses'
            className='flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700'
          >
            <LogOut size={16} className='text-white' />
            <span className='text-white text-sm'>Logout</span>
          </Link>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobileOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black/60 z-40'
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen bg-black border-r border-white/10 z-50
          transition-all duration-300
          ${isMobileOpen ? 'w-64' : 'w-16'}
        `}
      >
        <div className='flex flex-col h-full pt-20 px-2 gap-4'>
          <button
            onClick={() =>
              isMobileOpen ? handleNavigate('/dashboard') : handleExpandOnly()
            }
            className='flex items-center gap-3 p-3 rounded-xl bg-[#00F076]/20 hover:bg-[#00F076]/30 transition'
          >
            <LayoutDashboard size={18} className='text-[#00F076]' />
            {isMobileOpen && (
              <span className='text-white font-medium'>Dashboard</span>
            )}
          </button>

          <button
            onClick={() =>
              isMobileOpen ? handleNavigate('/profile') : handleExpandOnly()
            }
            className='flex items-center gap-3 p-3 rounded-xl bg-[#00F076]/20 hover:bg-[#00F076]/30 transition'
          >
            <User size={18} className='text-[#00F076]' />
            {isMobileOpen && (
              <span className='text-white font-medium'>Profile</span>
            )}
          </button>

          {/* Logout */}
          <button
            onClick={() =>
              isMobileOpen ? handleNavigate('/courses') : handleExpandOnly()
            }
            className='mt-auto flex items-center gap-3 p-3 mb-8 rounded-xl bg-red-600 hover:bg-red-700'
          >
            <LogOut size={18} className='text-white' />
            {isMobileOpen && (
              <span className='text-white font-medium'>Logout</span>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
