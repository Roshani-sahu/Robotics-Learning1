import React from 'react'
import Header from '../components/Header'
import { Calendar, Clock, MapPin } from 'lucide-react'

const Schedule: React.FC = () => {
  return (
    <section className='w-full h-screen bg-black text-white px-6 flex items-center'>
      <Header />

      <div className='max-w-[1100px] mx-auto w-full'>
        {/* Main Card */}
        <div className='relative rounded-[28px] bg-gradient-to-br from-[#05070d] via-[#070a12] to-[#04060c] border border-white/10 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.7)]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
            {/* LEFT SECTION */}
            <div>
              <h2 className='text-2xl font-semibold mb-8'>Bootcamp Schedule</h2>

              {/* Item */}
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center'>
                  <Calendar size={20} className='text-[#00F076]' />
                </div>
                <div>
                  <p className='font-semibold'>Starting Date</p>
                  <p className='text-gray-400'>
                    December 20th, 2025 (Saturday)
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center'>
                  <Clock size={20} className='text-[#00F076]' />
                </div>
                <div>
                  <p className='font-semibold'>Time</p>
                  <p className='text-gray-400'>10:30 AM – 12:30 PM IST</p>
                </div>
              </div>

              {/* Item */}
              <div className='flex items-start gap-4'>
                <div className='w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center'>
                  <MapPin size={20} className='text-[#00F076]' />
                </div>
                <div>
                  <p className='font-semibold'>Duration</p>
                  <p className='text-gray-400'>10 Weeks (Every Saturday)</p>
                </div>
              </div>
            </div>

            {/* RIGHT PRICING CARD */}
            <div className='relative rounded-[24px] bg-gradient-to-b from-[#070d18] to-[#040812] border border-white/10 p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]'>
              <p className='text-sm tracking-widest text-[#00F076] mb-3'>
                ₹ ONE-TIME PAYMENT
              </p>

              <h3 className='text-4xl font-bold mb-6'>₹24,999</h3>

              <ul className='space-y-3 text-gray-300 mb-8 text-sm'>
                {[
                  'Comprehensive lecture notes',
                  'Hands-on assignments with feedback',
                  'Complete code repositories',
                  'Dedicated Discord community',
                  '3 end-to-end Robotics projects with AI models deployed in real robots',
                  'Direct office hours with Vizuara team',
                  'Lifetime access to all materials',
                  'Career guidance and networking'
                ].map((item, index) => (
                  <li key={index} className='flex gap-3'>
                    <span className='mt-2 w-2 h-2 rounded-full bg-[#00F076]' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className='w-full py-3 rounded-xl font-semibold text-black bg-[#00F076] hover:opacity-90 transition'>
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
