import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, LayoutDashboard, User, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AlertLogout from './AlertLogout'

const Header2: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDashboardMenuOpen, setIsDashboardMenuOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  // Close all menus when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsDashboardMenuOpen(false)
  }, [location.pathname])

  const handleLogout = async () => {
    try {
      await logout()
      setIsLogoutModalOpen(false)
    } catch (error) {
      console.error('Failed to logout', error)
    }
  }

  return (
    <>
      {/* Mobile Menu Overlay for Login/Signup */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Overlay for Dashboard/Profile Menu */}
      {isDashboardMenuOpen && (
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden'
          onClick={() => setIsDashboardMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className='fixed top-4 left-1/2 z-[100] w-[96%] max-w-7xl -translate-x-1/2'>
        <div
          className='
            flex items-center justify-between
            rounded-2xl
            border border-white/10
            bg-white/5
            px-4 sm:px-6
            py-3
            backdrop-blur-xl
            shadow-[0_8px_40px_rgba(0,0,0,0.45)]
          '
        >
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center gap-3'
            onClick={() => {
              setIsMenuOpen(false)
              setIsDashboardMenuOpen(false)
            }}
          >
            <img
              src='/media/LogoBidyut.svg'
              alt='LogoBidyut'
              className='h-7 sm:h-8 w-auto cursor-pointer'
            />
          </Link>

          {/* Right side content */}
          <div className='flex items-center'>
            {/* Desktop - Dashboard/Profile/User Links */}
            {user ? (
              <div className='hidden md:flex items-center gap-4'>
                <Link
                  to='/dashboard'
                  className={`
                    h-[40px] px-6 rounded-[12px]
                    flex items-center justify-center
                    text-sm font-semibold
                    transition
                    ${location.pathname === '/dashboard'
                      ? 'bg-[#00F076] text-black'
                      : 'text-white hover:bg-white/10'}
                  `}
                >
                  Dashboard
                </Link>
                <div className='h-6 w-[1px] bg-white/20' />
                <button
                  onClick={() => setIsLogoutModalOpen(true)}
                  className='text-white/70 hover:text-white text-sm font-medium transition'
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className='hidden md:flex items-center gap-4'>
                {/* Login */}
                <Link
                  to='/login'
                  className='
                    h-[40px]
                    px-6
                    rounded-[12px]
                    border border-white/30
                    text-white text-sm font-medium
                    hover:bg-white/10
                    transition
                    flex items-center
                    justify-center
                  '
                >
                  Login
                </Link>

                {/* Signup */}
                <Link
                  to='/signup'
                  className='
                    h-[40px]
                    px-6
                    rounded-[12px]
                    text-black text-sm font-semibold
                    bg-[#00F076]
                    hover:opacity-90
                    transition
                    flex items-center
                    justify-center
                  '
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile - Dashboard/Profile Menu Toggle Button */}
            {user ? (
              <button
                onClick={() => setIsDashboardMenuOpen(!isDashboardMenuOpen)}
                className='md:hidden p-2 text-white/80 hover:text-white transition'
              >
                {isDashboardMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-2 text-white/80 hover:text-white transition'
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dashboard/Profile Menu Dropdown */}
        {user && (
          <div
            className={`
              md:hidden
              absolute top-full left-0 right-0
              mt-2
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_8px_40px_rgba(0,0,0,0.45)]
              overflow-hidden
              transition-all duration-300 z-[100]
              ${isDashboardMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
              }
            `}
          >
            <div className='flex flex-col p-4 space-y-3'>
              {/* Dashboard Button */}
              <Link
                to='/dashboard'
                className={`
                  w-full
                  h-[44px]
                  rounded-[12px]
                  text-sm font-medium
                  transition
                  flex items-center
                  justify-center gap-3
                  ${location.pathname === '/dashboard'
                    ? 'bg-[#00F076]/20 border border-[#00F076]/30 text-white'
                    : 'hover:bg-white/10 text-white'
                  }
                `}
                onClick={() => setIsDashboardMenuOpen(false)}
              >
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Link>

              {/* Profile Button */}
              <Link
                to='/profile'
                className={`
                  w-full
                  h-[44px]
                  rounded-[12px]
                  text-sm font-medium
                  transition
                  flex items-center
                  justify-center gap-3
                  ${location.pathname === '/profile'
                    ? 'bg-[#00F076]/20 border border-[#00F076]/30 text-white'
                    : 'hover:bg-white/10 text-white'
                  }
                `}
                onClick={() => setIsDashboardMenuOpen(false)}
              >
                <User size={18} />
                <span>Profile</span>
              </Link>

              {/* Logout Button */}
              <button
                onClick={() => setIsLogoutModalOpen(true)}
                className='
                  w-full
                  h-[44px]
                  rounded-[12px]
                  text-sm font-medium
                  bg-red-600 hover:bg-red-700
                  transition
                  flex items-center
                  justify-center gap-3
                  text-white
                '
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Dropdown (only for Guest) */}
        {!user && (
          <div
            className={`
              md:hidden
              absolute top-full left-0 right-0
              mt-2
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_8px_40px_rgba(0,0,0,0.45)]
              overflow-hidden
              transition-all duration-300 z-[100]
              ${isMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
              }
            `}
          >
            <div className='flex flex-col p-4 space-y-3'>
              {/* Mobile Login Button */}
              <Link
                to='/login'
                className='
                  w-full
                  h-[44px]
                  rounded-[12px]
                  border border-white/30
                  text-white text-sm font-medium
                  hover:bg-white/10
                  transition
                  flex items-center
                  justify-center
                '
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>

              {/* Mobile Signup Button */}
              <Link
                to='/signup'
                className='
                  w-full
                  h-[44px]
                  rounded-[12px]
                  text-black text-sm font-semibold
                  bg-[#00F076]
                  hover:opacity-90
                  transition
                  flex items-center
                  justify-center
                '
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Logout Confirmation Modal */}
      <AlertLogout
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  )
}

export default Header2