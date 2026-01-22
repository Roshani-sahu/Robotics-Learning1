import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header2: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Check current page
  const isDashboardPage = location.pathname.startsWith('/dashboard')
  const isProfilePage = location.pathname.startsWith('/profile')
  const isCoursesPage = location.pathname.startsWith('/courses')

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden'
          onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src='/media/DesignDharma.png'
              alt='DesignDharma'
              className='h-7 sm:h-8 w-auto cursor-pointer'
            />
          </Link>

          {/* Right side content */}
          <div className='flex items-center gap-4'>
            {/* Desktop - Dashboard/Profile text (non-clickable) */}
            {(isDashboardPage || isProfilePage) && (
              <div className='hidden md:block'>
                <span
                  className={`
                    h-[40px]
                    px-6
                    rounded-[12px]
                    text-sm font-semibold
                    flex items-center
                    justify-center
                    bg-[#00F076]
                    text-black
                    cursor-default
                  `}
                >
                  {isDashboardPage ? 'Dashboard' : 'Profile'}
                </span>
              </div>
            )}

            {/* Mobile - Dashboard/Profile text (non-clickable) */}
            {(isDashboardPage || isProfilePage) && (
              <div className='md:hidden'>
                <span
                  className={`
                    h-[40px]
                    px-6
                    rounded-[12px]
                    text-sm font-semibold
                    flex items-center
                    justify-center
                    bg-[#00F076]
                    text-black
                    cursor-default
                  `}
                >
                  {isDashboardPage ? 'Dashboard' : 'Profile'}
                </span>
              </div>
            )}

            {/* Desktop Login/Signup (for courses and other pages) */}
            {!isDashboardPage && !isProfilePage && (
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

            {/* Mobile Menu Toggle Button (only show on non-dashboard/profile pages) */}
            {!isDashboardPage && !isProfilePage && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-2 text-white/80 hover:text-white transition'
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown (only for non-dashboard/profile pages) */}
        {!isDashboardPage && !isProfilePage && (
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
              ${
                isMenuOpen
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
    </>
  )
}

export default Header2
