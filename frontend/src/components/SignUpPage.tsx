import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header2 from '../components/Header2'
import { Mail, Lock, Eye, EyeOff, User, CheckCircle } from 'lucide-react'

const SignUpPage: React.FC = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormValid =
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    password === confirmPassword &&
    termsAccepted

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid || isSubmitting) return

    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setShowSuccessPopup(true)

      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='min-h-screen w-full bg-black flex items-start justify-center px-4 relative overflow-hidden pb-10 md:pb-16'>
      <Header2 />

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
          <div className='relative rounded-2xl border border-[#00F076]/40 bg-black/80 p-8 max-w-sm shadow-xl'>
            <div className='flex justify-center mb-4'>
              <div className='w-16 h-16 rounded-full bg-[#00F076] flex items-center justify-center'>
                <CheckCircle size={32} className='text-black' />
              </div>
            </div>
            <h3 className='text-xl text-white font-semibold text-center mb-2'>
              Account Created Successfully
            </h3>
            <p className='text-sm text-white/70 text-center'>
              Redirecting to login…
            </p>
          </div>
        </div>
      )}

      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-90' />

      {/* Signup Card */}
      <div
        className='relative z-10 w-full max-w-md
        rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
        p-6 md:p-8
        mt-24 md:mt-32
        pb-8 md:pb-12
        shadow-[0_20px_60px_rgba(0,0,0,0.55)]'
      >
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
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Full Name */}
          <div>
            <label className='block text-xs mb-2 text-white/80'>
              Full Name
            </label>
            <div className='relative'>
              <User
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                size={16}
              />
              <input
                type='text'
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder='Enter your full name'
                className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-3 text-sm text-white placeholder-white/40 focus:border-[#00F076] outline-none'
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className='block text-xs mb-2 text-white/80'>Email</label>
            <div className='relative'>
              <Mail
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                size={16}
              />
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-3 text-sm text-white placeholder-white/40 focus:border-[#00F076] outline-none'
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className='block text-xs mb-2 text-white/80'>Password</label>
            <div className='relative'>
              <Lock
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                size={16}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Create a password'
                className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-9 text-sm text-white placeholder-white/40 focus:border-[#00F076] outline-none'
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
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                size={16}
              />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder='Confirm your password'
                className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-9 text-sm text-white placeholder-white/40 focus:border-[#00F076] outline-none'
              />
              <button
                type='button'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40'
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Password Match */}
          {password && confirmPassword && (
            <p className='text-xs flex items-center gap-1'>
              {password === confirmPassword ? (
                <span className='text-[#00F076] flex items-center gap-1'>
                  <CheckCircle size={12} /> Passwords match
                </span>
              ) : (
                <span className='text-red-400'>Passwords do not match</span>
              )}
            </p>
          )}

          {/* Terms */}
          <div className='flex items-start gap-2'>
            <input
              type='checkbox'
              checked={termsAccepted}
              onChange={e => setTermsAccepted(e.target.checked)}
              className='mt-1'
            />
            <p className='text-xs text-white/70'>
              I agree to the{' '}
              <Link to='/terms' className='text-[#00F076]'>
                Terms
              </Link>{' '}
              and{' '}
              <Link to='/privacy' className='text-[#00F076]'>
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={!isFormValid || isSubmitting}
            className={`w-full rounded-xl py-3 font-semibold text-sm transition
              ${
                isFormValid
                  ? 'bg-gradient-to-r from-[#00F076] to-[#00C864] text-black hover:opacity-90'
                  : 'bg-[#00F076]/40 text-black cursor-not-allowed'
              }`}
          >
            {isSubmitting ? 'Creating Account…' : 'Create Account'}
          </button>
        </form>

        {/* Login */}
        <p className='text-center text-xs text-white/70 mt-6'>
          Already have an account?{' '}
          <Link to='/login' className='text-[#00F076] hover:underline'>
            Sign in here
          </Link>
        </p>

        {/* Footer */}
        <p className='text-[10px] text-white/40 text-center mt-6'>
          Your information is securely stored and never shared.
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
