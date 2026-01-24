import React, { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <header className='fixed top-4 left-1/2 z-50 w-[96%] max-w-7xl -translate-x-1/2'>
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
          <Link to='/' className='flex items-center gap-3'>
            <img
              src='/media/LogoBidyut.svg'
              alt='LogoBidyut'
              className='h-7 sm:h-8 w-auto cursor-pointer'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-10 text-sm text-white/80'>
            <Link
              to='/curriculum'
              className='text-white hover:text-white transition'
            >
              Curriculum
            </Link>
            <Link to='/schedule' className='hover:text-white transition'>
              Schedule
            </Link>
            <Link to='/instructor' className='hover:text-white transition'>
              Instructor
            </Link>
            <Link to='/faq' className='hover:text-white transition'>
              Faq
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 text-white/80 hover:text-white transition'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop CTA Button */}
          <button
            className='
              hidden md:flex
              h-[40px]
              px-8
              rounded-[12px]
              border-2
              text-white text-sm font-medium
              bg-transparent
              hover:bg-white/10
              transition
              items-center gap-2
              whitespace-nowrap
            '
            style={{ borderColor: '#00F076' }}
            onClick={() => navigate('/courses')}
          >
            Enroll Now <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
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
            transition-all duration-300
            ${
              isMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
            }
          `}
        >
          <div className='flex flex-col p-4 space-y-1'>
            <Link
              to='/curriculum'
              className='px-4 py-3 rounded-xl text-white hover:bg-white/10 transition'
              onClick={() => setIsMenuOpen(false)}
            >
              Curriculum
            </Link>
            <Link
              to='/schedule'
              className='px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition'
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to='/instructor'
              className='px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition'
              onClick={() => setIsMenuOpen(false)}
            >
              Instructor
            </Link>
            <Link
              to='/faq'
              className='px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition'
              onClick={() => setIsMenuOpen(false)}
            >
              Faq
            </Link>

            {/* Mobile CTA Button */}
            <button
              className='
                mt-2
                w-full
                h-[44px]
                rounded-[12px]
                border-2
                text-white text-sm font-medium
                bg-transparent
                hover:bg-white/10
                transition
                flex items-center justify-center gap-2
              '
              style={{ borderColor: '#00F076' }}
              onClick={() => {
                navigate('/courses')
                setIsMenuOpen(false)
              }}
            >
              Enroll Now <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
