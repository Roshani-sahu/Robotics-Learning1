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

  const features = [
    'Comprehensive lecture notes',
    'Hands-on assignments with feedback',
    '3 end-to-end Robotics projects with AI',
    'Lifetime access to all materials',
    'Career guidance and networking'
  ]

  return (
    <section className='w-full min-h-screen bg-black text-white py-28 px-6'>
      <Header />

      <div className='max-w-[1300px] mt-4 mx-auto'>
        {/* Badge */}
        <div className='flex justify-center mb-6'>
          <span
            className='px-5 py-1.5 text-sm rounded-full border border-[#00F076] 
            text-[#00F076] bg-[#00F076]/10 backdrop-blur-sm'
          >
            Bootcamp Schedule
          </span>
        </div>

        {/* Heading */}
        <h2 className='text-center text-5xl font-semibold mb-4 text-gray-200'>
          Everything You Need to Succeed
        </h2>

        {/* Subheading */}
        <p className='text-center text-gray-400 max-w-3xl mx-auto mb-16'>
          Join our comprehensive 10-week robotics bootcamp with expert-led
          sessions
        </p>

        {/* Schedule Row - Half Size Containers */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
          {scheduleItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className='relative rounded-2xl border border-[#00F076]/30 
                bg-gradient-to-br from-white/5 via-white/2 to-[#00F076]/5
                backdrop-blur-xl p-5 min-h-[160px]
                hover:border-[#00F076] transition duration-300
                shadow-[0_4px_16px_rgba(0,0,0,0.3)]
                hover:shadow-[0_6px_24px_rgba(0,240,118,0.15)]'
              >
                {/* Icon with Smaller Glow */}
                <div
                  className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F076] to-[#00c45f] 
                  flex items-center justify-center mb-4 shadow-[0_0_12px_rgba(0,240,118,0.4)]'
                >
                  <Icon size={20} className='text-black' />
                </div>

                {/* Title */}
                <h3 className='text-base font-semibold mb-1.5 text-gray-100'>
                  {item.title}
                </h3>

                {/* Description */}
                <p className='text-gray-300 text-sm leading-relaxed'>
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Pricing Section */}
        <div className='relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Left Column - What You'll Learn */}
            <div className='space-y-8'>
              <div
                className='relative rounded-3xl border border-white/10 
                bg-gradient-to-br from-white/5 via-white/2 to-[#00F076]/5
                backdrop-blur-xl p-8
                hover:border-[#00F076] transition duration-300
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                hover:shadow-[0_12px_48px_rgba(0,240,118,0.15)]'
              >
                <h3 className='text-2xl font-semibold mb-6 text-gray-100'>
                  What You'll Learn
                </h3>

                <p className='text-gray-300 mb-6 leading-relaxed'>
                  Master the fundamentals of robotics and AI integration through
                  hands-on projects and expert guidance.
                </p>

                <div className='space-y-4'>
                  <div className='flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition duration-300'>
                    <div className='w-8 h-8 rounded-lg bg-[#00F076]/20 flex items-center justify-center flex-shrink-0'>
                      <div className='w-3 h-3 rounded-full bg-[#00F076]' />
                    </div>
                    <div>
                      <h4 className='font-medium text-gray-100 mb-1'>
                        Live Sessions
                      </h4>
                      <p className='text-gray-400 text-sm'>
                        Interactive 2-hour classes every Saturday
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition duration-300'>
                    <div className='w-8 h-8 rounded-lg bg-[#00F076]/20 flex items-center justify-center flex-shrink-0'>
                      <div className='w-3 h-3 rounded-full bg-[#00F076]' />
                    </div>
                    <div>
                      <h4 className='font-medium text-gray-100 mb-1'>
                        Recordings
                      </h4>
                      <p className='text-gray-400 text-sm'>
                        Access all session recordings anytime
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition duration-300'>
                    <div className='w-8 h-8 rounded-lg bg-[#00F076]/20 flex items-center justify-center flex-shrink-0'>
                      <div className='w-3 h-3 rounded-full bg-[#00F076]' />
                    </div>
                    <div>
                      <h4 className='font-medium text-gray-100 mb-1'>
                        Certificate
                      </h4>
                      <p className='text-gray-400 text-sm'>
                        Completion certificate for your portfolio
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limited Seats Card */}
              <div
                className='relative rounded-3xl border border-[#00F076]/40 
                bg-gradient-to-br from-[#00F076]/5 via-[#00F076]/0 to-[#00F076]/10
                backdrop-blur-xl p-8
                hover:border-[#00F076] transition duration-300
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                hover:shadow-[0_12px_48px_rgba(0,240,118,0.15)]'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div
                    className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F076] to-[#00c45f] 
                    flex items-center justify-center shadow-[0_0_20px_rgba(0,240,118,0.5)]'
                  >
                    <Shield size={24} className='text-black' />
                  </div>
                  <h4 className='font-semibold text-xl text-gray-100'>
                    Limited Seats
                  </h4>
                </div>

                <p className='text-gray-300'>
                  Only{' '}
                  <span className='text-[#00F076] font-bold'>25 spots</span> per
                  batch to ensure personalized attention and hands-on guidance
                  from instructors.
                </p>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className='relative'>
              <div className='sticky top-24'>
                <div
                  className='relative rounded-3xl border border-white/10 
                  bg-gradient-to-br from-white/5 via-white/2 to-[#00F076]/5
                  backdrop-blur-xl p-8
                  hover:border-[#00F076] transition duration-300
                  shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_12px_48px_rgba(0,240,118,0.15)]'
                >
                  {/* Price Badge */}
                  <div
                    className='flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-[#00F076]/10 border border-[#00F076]/30 
                    w-fit mb-6'
                  >
                    <CreditCard size={16} className='text-[#00F076]' />
                    <span className='text-sm font-semibold text-[#00F076] tracking-wide'>
                      ONE-TIME PAYMENT
                    </span>
                  </div>

                  {/* Price */}
                  <div className='mb-8'>
                    <div className='flex items-baseline gap-3 mb-2'>
                      <h3 className='text-5xl font-bold text-gray-100'>
                        ₹24,999
                      </h3>
                      <span className='text-gray-400 line-through text-lg'>
                        ₹34,999
                      </span>
                      <span className='text-sm font-semibold text-[#00F076] bg-[#00F076]/10 px-3 py-1 rounded-full'>
                        28% OFF
                      </span>
                    </div>
                    <p className='text-gray-400'>
                      Pay once, get lifetime access • No hidden fees
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className='space-y-4 mb-8'>
                    {features.map((item, index) => (
                      <li key={index} className='flex items-start gap-3'>
                        <div className='w-6 h-6 rounded-lg bg-[#00F076]/20 flex items-center justify-center flex-shrink-0'>
                          <CheckCircle2 size={14} className='text-[#00F076]' />
                        </div>
                        <span className='text-gray-300'>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className='space-y-6'>
                    <button
                      className='w-full py-4 rounded-xl font-semibold text-lg 
                      text-black bg-gradient-to-r from-[#00F076] to-[#00c45f]
                      hover:shadow-[0_0_30px_rgba(0,240,118,0.4)]
                      transition-all duration-300 transform hover:scale-[1.02]
                      border border-[#00F076]/50'
                    >
                      Enroll Now
                    </button>

                    <div className='text-center'>
                      <div className='flex items-center justify-center gap-2 text-sm text-gray-400 mb-4'>
                        <div className='w-6 h-px bg-gray-600' />
                        <span>7-day money-back guarantee</span>
                        <div className='w-6 h-px bg-gray-600' />
                      </div>

                      {/* Payment Methods */}
                      <div className='flex flex-col items-center gap-3'>
                        <span className='text-xs text-gray-500'>
                          Secure payment by
                        </span>
                        <div className='flex gap-3'>
                          {['Visa', 'Mastercard', 'Razorpay', 'UPI'].map(
                            method => (
                              <div
                                key={method}
                                className='px-3 py-2 bg-white/5 rounded-lg text-xs hover:bg-white/10 transition duration-300'
                              >
                                {method}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
