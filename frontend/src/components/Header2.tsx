import React from 'react'
import { Link } from 'react-router-dom'

const Header2: React.FC = () => {
  return (
    <header className='fixed top-4 left-1/2 z-50 w-[96%] max-w-7xl -translate-x-1/2'>
      <div
        className='
          flex items-center justify-between
          rounded-2xl
          border border-white/10
          bg-white/5
          px-6 py-3
          backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        '
      >
        {/* Logo (Redirects to "/") */}
        <Link to='/' className='flex items-center gap-3'>
          <img
            src='/media/DesignDharma.png'
            alt='DesignDharma'
            className='h-8 w-auto cursor-pointer'
          />
        </Link>

        {/* Auth Buttons */}
        <div className='flex items-center gap-4'>
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
      </div>
    </header>
  )
}

export default Header2
