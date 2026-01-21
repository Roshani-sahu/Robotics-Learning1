import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { Mail, Lock, Eye } from 'lucide-react'

const LoginPage: React.FC = () => {
  return (
    <div className='min-h-screen w-full bg-black flex items-center justify-center px-4'>
      <Header />

      {/* Background glow */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-90' />

      {/* Login Card */}
      <div className='relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.7)]'>
        {/* Logo + Title */}
        <div className='text-center mb-8'>
          <img
            src='/media/DesignDharma.png'
            alt='Logo'
            className='h-10 mx-auto mb-4'
          />
          <h1 className='text-2xl font-semibold text-white mb-1'>
            Welcome back
          </h1>
          <p className='text-white/60 text-sm'>
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form className='space-y-6'>
          {/* Email */}
          <div>
            <label className='block text-sm mb-2 text-white/80'>Email</label>
            <div className='relative'>
              <Mail
                size={18}
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
              />
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm mb-2 text-white/80'>Password</label>
            <div className='relative'>
              <Lock
                size={18}
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
              />
              <input
                type='password'
                placeholder='Enter your password'
                className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
              />
              <Eye
                size={18}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40 cursor-pointer'
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className='text-right'>
            <Link
              to='/forgot-password'
              className='text-sm text-[#00F076] hover:underline'
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full rounded-xl py-3 font-semibold text-black bg-[#00F076] hover:opacity-90 transition'
          >
            Sign in
          </button>
        </form>

        {/* Signup */}
        <p className='text-center text-sm text-white/70 mt-6'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='text-[#00F076] hover:underline'>
            Sign up
          </Link>
        </p>

        {/* Footer Note */}
        <p className='text-[11px] text-white/40 text-center mt-6 leading-relaxed'>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  )
}

export default LoginPage
