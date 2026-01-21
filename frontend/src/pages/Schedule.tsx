import React from 'react'
import Header from '../components/Header'
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react'

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

  const features = [
    'Comprehensive lecture notes',
    'Hands-on assignments with feedback',
    'Complete code repositories',
    'Dedicated Discord community',
    '3 end-to-end Robotics projects with AI models deployed in real robots',
    'Direct office hours with Vizuara team',
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

        {/* Pricing Section */}
        <div className='relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#05070d] via-[#070a12] to-[#04060c] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)]'>
          {/* Decorative Elements */}
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F076]/50 to-transparent' />
          <div className='absolute -top-20 -right-20 w-40 h-40 bg-[#00F076]/5 rounded-full blur-3xl' />
          <div className='absolute -bottom-20 -left-20 w-40 h-40 bg-[#00F076]/5 rounded-full blur-3xl' />

          <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12'>
            {/* Left Column - Additional Info */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-bold mb-4'>What You'll Learn</h3>
                <p className='text-gray-300 mb-4'>
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

              <div className='bg-gradient-to-r from-[#00F076]/10 to-transparent border-l-4 border-[#00F076] p-4 rounded-r-lg'>
                <h4 className='font-semibold mb-2'>Limited Seats Available</h4>
                <p className='text-sm text-gray-300'>
                  Only 25 spots per batch to ensure personalized attention
                </p>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className='relative'>
              <div className='relative rounded-2xl bg-gradient-to-b from-[#070d18] to-[#040812] border border-white/10 p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]'>
                {/* Price Badge */}
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F076]/10 border border-[#00F076]/30 mb-6'>
                  <span className='text-sm font-semibold text-[#00F076] tracking-wide'>
                    ₹ ONE-TIME PAYMENT
                  </span>
                </div>

                {/* Price */}
                <div className='mb-8'>
                  <div className='flex items-baseline gap-2'>
                    <h3 className='text-5xl font-bold'>₹24,999</h3>
                    <span className='text-gray-400 line-through'>₹34,999</span>
                    <span className='text-sm text-[#00F076] bg-[#00F076]/10 px-2 py-1 rounded'>
                      28% OFF
                    </span>
                  </div>
                  <p className='text-gray-400 text-sm mt-2'>
                    Pay once, get lifetime access
                  </p>
                </div>

                {/* Features List */}
                <ul className='space-y-4 mb-8'>
                  {features.map((item, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <CheckCircle2
                        size={20}
                        className='text-[#00F076] mt-0.5 flex-shrink-0'
                      />
                      <span className='text-gray-300'>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className='space-y-4'>
                  <button className='w-full py-4 rounded-xl font-semibold text-lg text-black bg-gradient-to-r from-[#00F076] to-[#00C864] hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#00F076]/20'>
                    Enroll Now
                  </button>

                  <div className='flex items-center justify-center gap-2 text-sm text-gray-400'>
                    <div className='w-4 h-px bg-gray-600' />
                    <span>7-day money-back guarantee</span>
                    <div className='w-4 h-px bg-gray-600' />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className='flex items-center justify-center gap-6 mt-6'>
                <div className='text-xs text-gray-400'>Secure payment by</div>
                <div className='flex gap-4'>
                  {['Visa', 'Mastercard', 'Razorpay', 'UPI'].map(method => (
                    <div
                      key={method}
                      className='px-3 py-1.5 bg-white/5 rounded-lg text-xs'
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className='text-center mt-8 text-gray-500 text-sm'>
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
