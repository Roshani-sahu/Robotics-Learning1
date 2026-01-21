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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Show success popup
      setShowSuccessPopup(true)

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='min-h-screen w-full bg-black flex items-center justify-center px-4 relative'>
      <Header2 />

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
          <div
            className='relative rounded-2xl border border-[#00F076]/40 
            bg-gradient-to-br from-white/5 via-white/2 to-[#00F076]/5
            backdrop-blur-xl p-8 max-w-sm mx-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
          >
            {/* Close button */}
            <button
              onClick={() => setShowSuccessPopup(false)}
              className='absolute top-3 right-3 text-white/40 hover:text-white/70 transition'
            >
              ✕
            </button>

            {/* Success Icon */}
            <div className='flex justify-center mb-4'>
              <div
                className='w-16 h-16 rounded-full bg-gradient-to-br from-[#00F076] to-[#00c45f] 
                flex items-center justify-center shadow-[0_0_20px_rgba(0,240,118,0.5)]'
              >
                <CheckCircle size={32} className='text-black' />
              </div>
            </div>

            {/* Success Message */}
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Account Created Successfully!
              </h3>
              <p className='text-gray-300 text-sm mb-4'>
                Welcome aboard! You will be redirected to the login page in a
                few seconds.
              </p>
              <div className='w-full bg-white/10 h-1 rounded-full mt-4'>
                <div className='h-full bg-[#00F076] rounded-full animate-[progress_3s_ease-in-out_forwards]' />
              </div>
              <p className='text-xs text-gray-400 mt-2'>
                Redirecting to login...
              </p>
            </div>
          </div>
        </div>
      )}

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
        <form onSubmit={handleSubmit} className='space-y-6'>
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
                  required
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
                  required
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
                  required
                  minLength={6}
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
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder='Confirm your password'
                  className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-9 pr-9 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
                  required
                  minLength={6}
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

          {/* Password Match Indicator */}
          {password && confirmPassword && (
            <div className='text-xs'>
              {password === confirmPassword ? (
                <p className='text-[#00F076] flex items-center gap-1'>
                  <CheckCircle size={12} /> Passwords match
                </p>
              ) : (
                <p className='text-red-400'>Passwords do not match</p>
              )}
            </div>
          )}

          {/* Terms */}
          <div className='flex items-start gap-2'>
            <input
              type='checkbox'
              checked={termsAccepted}
              onChange={e => setTermsAccepted(e.target.checked)}
              className='mt-0.5 w-4 h-4 rounded border-white/30 bg-black/40 text-[#00F076] focus:ring-[#00F076]'
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

          {/* Submit Button */}
          <button
            type='submit'
            disabled={!isFormValid || isSubmitting}
            className={`w-full rounded-xl py-3 font-semibold text-sm transition-all duration-300
              ${
                isFormValid && !isSubmitting
                  ? 'bg-gradient-to-r from-[#00F076] to-[#00C864] text-black hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,240,118,0.3)] transform hover:scale-[1.02]'
                  : 'bg-[#00F076]/40 text-black cursor-not-allowed'
              } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
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
