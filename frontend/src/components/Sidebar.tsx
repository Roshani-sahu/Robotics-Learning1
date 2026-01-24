import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, User, LogOut } from 'lucide-react'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const expandOnly = () => {
    if (!isMobileOpen) setIsMobileOpen(true)
  }

  const navigateAndClose = (path: string) => {
    if (location.pathname !== path) navigate(path)
    setIsMobileOpen(false)
  }

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className='hidden md:flex fixed left-0 top-0 w-64 h-screen bg-black border-r border-white/10 z-40'>
        <div className='flex flex-col w-full h-full'>
          <nav className='flex-1 p-4 mt-24 space-y-2'>
            <Link
              to='/dashboard'
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  isActive('/dashboard')
                    ? 'bg-[#00F076]/20 border border-[#00F076]/30'
                    : 'hover:bg-white/5'
                }`}
            >
              <LayoutDashboard size={18} className='text-[#00F076]' />
              <span>Dashboard</span>
            </Link>

            <Link
              to='/profile'
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  isActive('/profile')
                    ? 'bg-[#00F076]/20 border border-[#00F076]/30'
                    : 'hover:bg-white/5'
                }`}
            >
              <User size={18} className='text-[#00F076]' />
              <span>Profile</span>
            </Link>
          </nav>

          {/* DESKTOP LOGOUT BOTTOM */}
          {/* <div className='p-4 border-t border-white/10'>
            <button
              onClick={() => navigate('/courses')}
              className='w-full flex items-center gap-2 px-3 py-2 rounded-lg
                bg-red-600 hover:bg-red-700 transition'
            >
              <LogOut size={16} />
              <span className='text-sm'>Logout</span>
            </button>
          </div> */}
        </div>
      </aside>

      {/* ================= MOBILE SIDEBAR ================= */}
      {/* REMOVED COMPLETELY - Hidden on mobile */}
    </>
  )
}

export default Sidebar
