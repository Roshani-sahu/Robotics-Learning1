import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
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

        {/* Navigation */}
        <nav className='hidden md:flex items-center gap-10 text-sm text-white/80'>
          <Link
            to='/curriculum'
            className='text-white hover:text-white transition'
          >
            Curriculum
          </Link>
          <a href='#' className='hover:text-white transition'>
            Schedule
          </a>
          <a href='#' className='hover:text-white transition'>
            Instructor
          </a>
          <a href='#' className='hover:text-white transition'>
            Faq
          </a>
        </nav>

        {/* CTA Button */}
        <button
          className='
            h-[40px]
            px-8
            rounded-[12px]
            border-2
            text-white text-sm font-medium
            bg-transparent
            hover:bg-white/10
            transition
            flex items-center gap-2
            whitespace-nowrap
          '
          style={{ borderColor: '#00F076' }}
        >
          Enroll Now <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </header>
  )
}

export default Header
