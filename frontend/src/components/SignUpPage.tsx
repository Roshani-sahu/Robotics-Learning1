import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react'

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className='min-h-screen w-full bg-black flex items-center justify-center px-4'>
      <Header />

      {/* Background glow */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-90' />

      {/* Signup Card - Compact horizontal layout */}
      {/* Signup Card - Compact horizontal layout */}
      <div className='relative z-10 w-full max-w-[1300px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 mt-16 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'>
        {' '}
        {/* Logo + Title */}
        <div className='text-center mb-8'>
          <img
            src='/media/DesignDharma.png'
            alt='Logo'
            className='h-10 mx-auto mb-4'
          />
          <h1 className='text-2xl font-semibold text-white mb-1'>
            Create Your Account
          </h1>
          <p className='text-white/60 text-sm'>
            Join us and start your learning journey today
          </p>
        </div>
        {/* Horizontal Form */}
        <form className='space-y-6'>
          {/* First Row: Full Name and Email */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Full Name */}
            <div>
              <label className='block text-xs mb-2 text-white/80'>
                Full Name
              </label>
              <div className='relative'>
                <User
                  size={16}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                />
                <input
                  type='text'
                  placeholder='Enter your full name'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076] transition duration-200'
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className='block text-xs mb-2 text-white/80'>Email</label>
              <div className='relative'>
                <Mail
                  size={16}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076] transition duration-200'
                />
              </div>
            </div>
          </div>

          {/* Second Row: Password and Confirm Password */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Password */}
            <div>
              <label className='block text-xs mb-2 text-white/80'>
                Password
              </label>
              <div className='relative'>
                <Lock
                  size={16}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Create a password'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-9 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076] transition duration-200'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition'
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className='block text-xs mb-2 text-white/80'>
                Confirm Password
              </label>
              <div className='relative'>
                <Lock
                  size={16}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm your password'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-9 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076] transition duration-200'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition'
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Terms & Conditions - Compact */}
          <div className='flex items-start gap-2 mt-2'>
            <input
              type='checkbox'
              id='terms'
              className='mt-0.5 rounded border-white/30 bg-black/40 focus:ring-[#00F076] text-[#00F076] w-4 h-4'
            />
            <label htmlFor='terms' className='text-xs text-white/70'>
              I agree to the{' '}
              <Link to='/terms' className='text-[#00F076] hover:underline'>
                Terms
              </Link>{' '}
              and{' '}
              <Link to='/privacy' className='text-[#00F076] hover:underline'>
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div className='pt-2'>
            <button
              type='submit'
              className='w-full rounded-xl py-3 font-semibold text-sm text-black bg-gradient-to-r from-[#00F076] to-[#00C864] hover:opacity-90 transition hover:shadow-[0_0_20px_rgba(0,240,118,0.3)]'
            >
              Create Account
            </button>
          </div>
        </form>
        {/* Divider */}
        <div className='flex items-center my-4'>
          <div className='flex-1 h-px bg-white/10' />
          <span className='px-3 text-xs text-white/40'>or continue with</span>
          <div className='flex-1 h-px bg-white/10' />
        </div>
        {/* Login Link */}
        <div className='text-center'>
          <p className='text-xs text-white/70'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-[#00F076] font-medium hover:underline'
            >
              Sign in here
            </Link>
          </p>
        </div>
        {/* Footer Note */}
        <p className='text-[10px] text-white/40 text-center mt-6 leading-relaxed'>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
