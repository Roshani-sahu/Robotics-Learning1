import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, User, LogOut } from 'lucide-react'

const Sidebar: React.FC = () => {
  const location = useLocation()

  // Check if current route is active
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Sidebar for Desktop */}
      <div className='hidden md:flex flex-col w-64 min-h-screen bg-black border-r border-white/10'>
        {/* Navigation Items */}
        <nav className='flex-1 p-4 mt-20 space-y-2'>
          {/* Dashboard */}
          <Link
            to='/dashboard'
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${
                isActive('/dashboard')
                  ? 'bg-gradient-to-r from-[#00F076]/20 to-[#00F076]/5 border border-[#00F076]/30'
                  : 'hover:bg-white/5 hover:border-white/10'
              }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center
              ${
                isActive('/dashboard')
                  ? 'bg-gradient-to-br from-[#00F076] to-[#00c45f] shadow-[0_0_12px_rgba(0,240,118,0.4)]'
                  : 'bg-white/5 group-hover:bg-white/10'
              }`}
            >
              <LayoutDashboard
                size={18}
                className={`${
                  isActive('/dashboard')
                    ? 'text-black'
                    : 'text-white/60 group-hover:text-white'
                }`}
              />
            </div>
            <span
              className={`font-medium ${
                isActive('/dashboard')
                  ? 'text-white'
                  : 'text-white/70 group-hover:text-white'
              }`}
            >
              Dashboard
            </span>
          </Link>

          {/* Profile */}
          <Link
            to='/profile'
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${
                isActive('/profile')
                  ? 'bg-gradient-to-r from-[#00F076]/20 to-[#00F076]/5 border border-[#00F076]/30'
                  : 'hover:bg-white/5 hover:border-white/10'
              }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center
              ${
                isActive('/profile')
                  ? 'bg-gradient-to-br from-[#00F076] to-[#00c45f] shadow-[0_0_12px_rgba(0,240,118,0.4)]'
                  : 'bg-white/5 group-hover:bg-white/10'
              }`}
            >
              <User
                size={18}
                className={`${
                  isActive('/profile')
                    ? 'text-black'
                    : 'text-white/60 group-hover:text-white'
                }`}
              />
            </div>
            <span
              className={`font-medium ${
                isActive('/profile')
                  ? 'text-white'
                  : 'text-white/70 group-hover:text-white'
              }`}
            >
              Profile
            </span>
          </Link>
        </nav>

        {/* Logout Button at Bottom */}
        <div className='p-4 border-t border-white/10'>
          <Link
            to='/courses'
            className='flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group hover:bg-white/5'
          >
            <div className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10'>
              <LogOut
                size={18}
                className='text-white/60 group-hover:text-white'
              />
            </div>
            <span className='font-medium text-white/70 group-hover:text-white'>
              Logout
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 backdrop-blur-xl z-50'>
        <div className='flex justify-around items-center h-16 px-4'>
          {/* Dashboard */}
          <Link
            to='/dashboard'
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200
              ${
                isActive('/dashboard')
                  ? 'text-[#00F076]'
                  : 'text-white/60 hover:text-white'
              }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-1
              ${
                isActive('/dashboard')
                  ? 'bg-gradient-to-br from-[#00F076] to-[#00c45f] shadow-[0_0_12px_rgba(0,240,118,0.4)]'
                  : 'bg-white/5'
              }`}
            >
              <LayoutDashboard
                size={18}
                className={
                  isActive('/dashboard') ? 'text-black' : 'currentColor'
                }
              />
            </div>
            <span className='text-xs font-medium'>Dashboard</span>
          </Link>

          {/* Profile */}
          <Link
            to='/profile'
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200
              ${
                isActive('/profile')
                  ? 'text-[#00F076]'
                  : 'text-white/60 hover:text-white'
              }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-1
              ${
                isActive('/profile')
                  ? 'bg-gradient-to-br from-[#00F076] to-[#00c45f] shadow-[0_0_12px_rgba(0,240,118,0.4)]'
                  : 'bg-white/5'
              }`}
            >
              <User
                size={18}
                className={isActive('/profile') ? 'text-black' : 'currentColor'}
              />
            </div>
            <span className='text-xs font-medium'>Profile</span>
          </Link>

          {/* Logout */}
          <Link
            to='/courses'
            className='flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200 text-white/60 hover:text-white'
          >
            <div className='w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-1'>
              <LogOut size={18} className='currentColor' />
            </div>
            <span className='text-xs font-medium'>Logout</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
