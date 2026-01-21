import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Header2'
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react'

const SignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const isFormValid =
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    password === confirmPassword &&
    termsAccepted

  return (
    <div className='min-h-screen w-full bg-black flex items-center justify-center px-4'>
      <Header2 />

      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-90' />

      {/* Signup Card */}
      <div className='relative z-10 w-full max-w-[1300px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 mt-16 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'>
        {/* Header */}
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

        {/* Form */}
        <form className='space-y-6'>
          {/* Name + Email */}
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
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder='Enter your full name'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
                />
              </div>
            </div>
          </div>

          {/* Passwords */}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Create a password'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-9 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40'
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
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder='Confirm your password'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-9 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40'
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

          {/* Terms */}
          <div className='flex items-start gap-2'>
            <input
              type='checkbox'
              checked={termsAccepted}
              onChange={e => setTermsAccepted(e.target.checked)}
              className='mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-[#00F076]'
            />
            <p className='text-xs text-white/70'>
              I agree to the{' '}
              <Link to='/terms' className='text-[#00F076] hover:underline'>
                Terms
              </Link>{' '}
              and{' '}
              <Link to='/privacy' className='text-[#00F076] hover:underline'>
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={!isFormValid}
            className={`w-full rounded-xl py-3 font-semibold text-sm transition
              ${
                isFormValid
                  ? 'bg-gradient-to-r from-[#00F076] to-[#00C864] text-black hover:opacity-90'
                  : 'bg-[#00F076]/40 text-black cursor-not-allowed'
              }`}
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <div className='text-center mt-6'>
          <p className='text-xs text-white/70'>
            Already have an account?{' '}
            <Link to='/login' className='text-[#00F076] hover:underline'>
              Sign in here
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className='text-[10px] text-white/40 text-center mt-6'>
          Your information is securely stored and never shared with third
          parties.
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
