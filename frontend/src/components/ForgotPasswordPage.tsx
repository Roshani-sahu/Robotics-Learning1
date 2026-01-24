import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header2 from '../components/Header2'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const ForgotPasswordPage: React.FC = () => {
    const navigate = useNavigate()
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || loading) return

        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            await resetPassword(email)
            setSuccess(true)
        } catch (error: any) {
            console.error('Password reset error:', error)
            if (error.code === 'auth/user-not-found') {
                setError('No account found with this email address.')
            } else {
                setError(error.message || 'Failed to send reset email.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen w-full bg-black flex items-center justify-center px-4'>
            <Header2 />

            {/* Background glow */}
            <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-90' />

            {/* Card */}
            <div className='relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mt-20 shadow-[0_20px_80px_rgba(0,0,0,0.7)]'>

                {/* Back Link */}
                <button
                    onClick={() => navigate('/login')}
                    className="absolute top-8 left-8 text-white/40 hover:text-white transition"
                >
                    <ArrowLeft size={20} />
                </button>

                {/* Logo + Title */}
                <div className='text-center mb-8 pt-4'>
                    <h1 className='text-2xl font-semibold text-white mb-2'>
                        Reset Password
                    </h1>
                    <p className='text-white/60 text-sm max-w-[280px] mx-auto'>
                        Enter your email and we'll send you instructions to reset your password.
                    </p>
                </div>

                {success ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-[#00F076]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle size={32} className="text-[#00F076]" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">Check your email</h3>
                        <p className="text-white/60 text-sm mb-8">
                            We've sent password reset instructions to <strong>{email}</strong>
                        </p>
                        <button
                            onClick={() => navigate('/login')}
                            className="w-full rounded-xl py-3 font-semibold bg-[#00F076] text-black hover:opacity-90 transition"
                        >
                            Back to Login
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Error Message */}
                        {error && (
                            <div className='bg-red-500/10 border border-red-500/20 rounded-xl p-3'>
                                <p className='text-red-400 text-sm'>{error}</p>
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label className='block text-sm mb-2 text-white/80'>Email Address</label>
                            <div className='relative'>
                                <Mail
                                    size={18}
                                    className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40'
                                />
                                <input
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Enter your email'
                                    className='w-full rounded-xl bg-black/40 border border-white/10 py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-[#00F076]'
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={loading}
                            className={`w-full rounded-xl py-3 font-semibold transition
                ${loading
                                    ? 'bg-[#00F076]/40 text-black cursor-not-allowed'
                                    : 'bg-[#00F076] text-black hover:opacity-90'
                                }`}
                        >
                            {loading ? 'Sending Instructions...' : 'Send Reset Link'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ForgotPasswordPage
