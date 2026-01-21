import React from 'react'
import Header from '../components/Header'
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Shield,
  CreditCard
} from 'lucide-react'

const Schedule: React.FC = () => {
  const scheduleItems = [
    {
      icon: Calendar,
      title: 'Starting Date',
      description: 'December 20th, 2025 (Saturday)'
    },
    {
      icon: Clock,
      title: 'Time',
      description: '10:30 AM – 12:30 PM IST'
    },
    {
      icon: MapPin,
      title: 'Duration',
      description: '10 Weeks (Every Saturday)'
    }
  ]

  // Reduced to 5 key features only
  const features = [
    'Comprehensive lecture notes',
    'Hands-on assignments with feedback',
    '3 end-to-end Robotics projects with AI',
    'Lifetime access to all materials',
    'Career guidance and networking'
  ]

  return (
    <section className='w-full min-h-screen bg-black text-white px-4 sm:px-6 py-8 flex flex-col'>
      <Header />

      <div className='max-w-[1200px] mx-auto w-full flex-1 flex flex-col justify-center py-8'>
        {/* Main Heading */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
            Bootcamp Schedule
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Join our comprehensive 10-week robotics bootcamp with expert-led
            sessions
          </p>
        </div>

        {/* Schedule Row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          {scheduleItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className='relative group bg-gradient-to-br from-[#0a0e17] to-[#0d1119] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#00F076]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
                <div className='relative'>
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F076]/20 to-[#00F076]/5 flex items-center justify-center mb-4'>
                    <Icon size={24} className='text-[#00F076]' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                  <p className='text-gray-300'>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pricing Section - Compact Layout */}
        <div className='relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#05070d] via-[#070a12] to-[#04060c] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)]'>
          {/* Decorative Elements */}
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F076]/50 to-transparent' />

          <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8'>
            {/* Left Column - Additional Info */}
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-bold mb-3'>What You'll Learn</h3>
                <p className='text-gray-300 mb-4 text-sm'>
                  Master the fundamentals of robotics and AI integration through
                  hands-on projects and expert guidance.
                </p>
                <div className='space-y-2'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-[#00F076]' />
                    <span className='text-sm text-gray-400'>
                      Live interactive sessions
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-[#00F076]' />
                    <span className='text-sm text-gray-400'>
                      Recordings available
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-[#00F076]' />
                    <span className='text-sm text-gray-400'>
                      Certificate of completion
                    </span>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-r from-[#00F076]/10 to-transparent border-l-4 border-[#00F076] p-3 rounded-r-lg'>
                <div className='flex items-center gap-2 mb-1'>
                  <Shield size={16} className='text-[#00F076]' />
                  <h4 className='font-semibold text-sm'>Limited Seats</h4>
                </div>
                <p className='text-xs text-gray-300'>
                  Only 25 spots per batch for personalized attention
                </p>
              </div>
            </div>

            {/* Right Column - Compact Pricing Card */}
            <div className='relative'>
              <div className='relative rounded-2xl bg-gradient-to-b from-[#070d18] to-[#040812] border border-white/10 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]'>
                {/* Price Badge */}
                <div className='inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#00F076]/10 border border-[#00F076]/30 mb-4'>
                  <CreditCard size={12} className='text-[#00F076]' />
                  <span className='text-xs font-semibold text-[#00F076] tracking-wide'>
                    ONE-TIME PAYMENT
                  </span>
                </div>

                {/* Price */}
                <div className='mb-6'>
                  <div className='flex items-baseline gap-2 mb-1'>
                    <h3 className='text-4xl font-bold'>₹24,999</h3>
                    <span className='text-gray-400 line-through text-sm'>
                      ₹34,999
                    </span>
                    <span className='text-xs text-[#00F076] bg-[#00F076]/10 px-2 py-1 rounded'>
                      28% OFF
                    </span>
                  </div>
                  <p className='text-gray-400 text-xs'>
                    Pay once, get lifetime access • No hidden fees
                  </p>
                </div>

                {/* 5 Features List - No Scroll */}
                <ul className='space-y-3 mb-6'>
                  {features.map((item, index) => (
                    <li key={index} className='flex items-start gap-2'>
                      <CheckCircle2
                        size={16}
                        className='text-[#00F076] mt-0.5 flex-shrink-0'
                      />
                      <span className='text-gray-300 text-sm'>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className='space-y-3'>
                  <button className='w-full py-3 rounded-xl font-semibold text-base text-black bg-gradient-to-r from-[#00F076] to-[#00C864] hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#00F076]/20'>
                    Enroll Now
                  </button>

                  <div className='flex flex-col items-center gap-1 text-xs text-gray-400'>
                    <div className='flex items-center gap-2'>
                      <div className='w-3 h-px bg-gray-600' />
                      <span>7-day money-back guarantee</span>
                      <div className='w-3 h-px bg-gray-600' />
                    </div>

                    {/* Compact Payment Methods */}
                    <div className='flex items-center gap-2 mt-2'>
                      <span className='text-xs text-gray-500'>
                        Secure payment:
                      </span>
                      <div className='flex gap-2'>
                        {['Visa', 'Mastercard', 'UPI'].map(method => (
                          <div
                            key={method}
                            className='px-2 py-1 bg-white/5 rounded text-[10px]'
                          >
                            {method}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className='text-center mt-6 text-gray-500 text-sm'>
          <p>
            Need help deciding?{' '}
            <a href='#' className='text-[#00F076] hover:underline'>
              Schedule a consultation call
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Schedule
