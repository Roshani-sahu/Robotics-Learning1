import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Header2'
import { Mail, Key, Lock, CheckCircle, Eye, EyeOff } from 'lucide-react'

const ForgotPassword: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendOtp = () => {
    if (!email) return
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setOtpSent(true)
      setIsLoading(false)
      // For demo purposes, auto-fill a sample OTP
      setOtp('123456')
    }, 1000)
  }

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      setStep(2)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      handleVerifyOtp()
    } else {
      if (newPassword === confirmPassword && newPassword.length >= 6) {
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
          setIsLoading(false)
          setShowSuccessPopup(true)
          // Reset form after 3 seconds
          setTimeout(() => {
            setShowSuccessPopup(false)
            setStep(1)
            setEmail('')
            setOtp('')
            setNewPassword('')
            setConfirmPassword('')
            setOtpSent(false)
          }, 3000)
        }, 1000)
      }
    }
  }

  const isStep1Valid = email && otp.length === 6
  const isStep2Valid =
    newPassword === confirmPassword &&
    newPassword.length >= 6 &&
    confirmPassword.length >= 6
  const isDisabled = step === 1 ? !isStep1Valid : !isStep2Valid

  return (
    <div className='min-h-screen w-full bg-black flex items-center justify-center px-4 relative overflow-hidden'>
      <Header2 />

      {/* Background glow */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-90' />

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
          <div className='relative z-60 w-full max-w-sm rounded-2xl border border-[#00F076]/30 bg-black/90 p-8 mx-4 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,240,118,0.3)]'>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00F076]/20 mb-6'>
                <CheckCircle size={36} className='text-[#00F076]' />
              </div>
              <h2 className='text-2xl font-semibold text-white mb-2'>
                Success!
              </h2>
              <p className='text-white/70 mb-6'>
                Your password has been updated successfully.
              </p>
              <Link
                to='/login'
                className='inline-block w-full rounded-xl bg-[#00F076] text-black font-semibold py-3 hover:opacity-90 transition'
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Card */}
      <div className='relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mt-20 md:mt-32 shadow-[0_20px_80px_rgba(0,0,0,0.7)]'>
        {/* Logo + Title */}
        <div className='text-center mb-8'>
          <img
            src='/media/DesignDharma.png'
            alt='Logo'
            className='h-10 mx-auto mb-4'
          />
          <h1 className='text-2xl font-semibold text-white mb-1'>
            Reset Password
          </h1>
          <p className='text-white/60 text-sm'>
            {step === 1
              ? 'Enter your email to receive OTP'
              : 'Create your new password'}
          </p>
        </div>

        {/* Progress Steps */}
        <div className='flex items-center justify-between mb-8'>
          <div className='flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
              ${step === 1 ? 'bg-[#00F076]' : 'bg-[#00F076]'}`}
            >
              <span className='text-black font-semibold'>1</span>
            </div>
            <span className='text-xs text-white/60'>Verify Email</span>
          </div>
          <div className='flex-1 h-0.5 mx-4 bg-white/10' />
          <div className='flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
              ${step === 2 ? 'bg-[#00F076]' : 'bg-white/10'}`}
            >
              <span
                className={`font-semibold ${
                  step === 2 ? 'text-black' : 'text-white/60'
                }`}
              >
                2
              </span>
            </div>
            <span className='text-xs text-white/60'>New Password</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {step === 1 ? (
            <>
              {/* Email */}
              <div>
                <label className='block text-sm mb-2 text-white/80'>
                  Email
                </label>
                <div className='relative'>
                  <Mail
                    size={18}
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                  />
                  <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Enter your registered email'
                    className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#00F076] disabled:opacity-50'
                    disabled={otpSent}
                  />
                </div>
              </div>

              {/* OTP */}
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <label className='block text-sm text-white/80'>OTP</label>
                  {!otpSent ? (
                    <button
                      type='button'
                      onClick={handleSendOtp}
                      disabled={!email || isLoading}
                      className={`text-sm transition
                        ${
                          !email || isLoading
                            ? 'text-white/40 cursor-not-allowed'
                            : 'text-[#00F076] hover:underline'
                        }`}
                    >
                      {isLoading ? 'Sending...' : 'Send OTP'}
                    </button>
                  ) : (
                    <span className='text-sm text-[#00F076]'>OTP Sent ✓</span>
                  )}
                </div>
                <div className='relative'>
                  <Key
                    size={18}
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                  />
                  <input
                    type='text'
                    value={otp}
                    onChange={e => {
                      const value = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 6)
                      setOtp(value)
                    }}
                    placeholder={
                      otpSent ? 'Enter 6-digit OTP' : 'Click Send OTP first'
                    }
                    className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#00F076] disabled:opacity-50'
                    disabled={!otpSent}
                    maxLength={6}
                  />
                  {otp.length > 0 && (
                    <div className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-sm'>
                      {otp.length}/6
                    </div>
                  )}
                </div>
                <p className='text-xs text-white/40 mt-2'>
                  Enter the 6-digit code sent to your email
                </p>
              </div>
            </>
          ) : (
            <>
              {/* New Password */}
              <div>
                <label className='block text-sm mb-2 text-white/80'>
                  New Password
                </label>
                <div className='relative'>
                  <Lock
                    size={18}
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                  />
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder='Enter new password'
                    className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
                  />
                  <button
                    type='button'
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white'
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className='text-xs text-white/40 mt-2'>
                  Must be at least 6 characters long
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className='block text-sm mb-2 text-white/80'>
                  Confirm Password
                </label>
                <div className='relative'>
                  <Lock
                    size={18}
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                  />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder='Confirm new password'
                    className={`w-full rounded-xl bg-black/40 border py-3 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none
                      ${
                        newPassword &&
                        confirmPassword &&
                        newPassword !== confirmPassword
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-white/10 focus:border-[#00F076]'
                      }`}
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white'
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                {newPassword &&
                  confirmPassword &&
                  newPassword !== confirmPassword && (
                    <p className='text-xs text-red-400 mt-2'>
                      Passwords do not match
                    </p>
                  )}
                {newPassword &&
                  confirmPassword &&
                  newPassword === confirmPassword && (
                    <p className='text-xs text-[#00F076] mt-2'>
                      Passwords match ✓
                    </p>
                  )}
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className='space-y-4'>
            <button
              type='submit'
              disabled={isDisabled || isLoading}
              className={`w-full rounded-xl py-3 font-semibold transition
                ${
                  isDisabled || isLoading
                    ? 'bg-[#00F076]/40 text-black cursor-not-allowed'
                    : 'bg-[#00F076] text-black hover:opacity-90'
                }`}
            >
              {isLoading
                ? 'Processing...'
                : step === 1
                ? 'Verify & Continue'
                : 'Update Password'}
            </button>

            {step === 2 && (
              <button
                type='button'
                onClick={() => setStep(1)}
                className='w-full rounded-xl py-3 font-medium text-white border border-white/20 hover:bg-white/5 transition'
              >
                Back
              </button>
            )}
          </div>
        </form>

        {/* Back to Login */}
        <p className='text-center text-sm text-white/70 mt-6'>
          Remember your password?{' '}
          <Link to='/login' className='text-[#00F076] hover:underline'>
            Back to Login
          </Link>
        </p>

        {/* Footer Note */}
        <p className='text-[11px] text-white/40 text-center mt-6 leading-relaxed'>
          We'll send you an OTP to verify your identity before resetting your
          password.
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
