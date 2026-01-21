import React from 'react'
import Header from '../components/Header'

const Instructor: React.FC = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white px-6 py-20'>
      <Header />

      {/* Top Heading */}
      <div className='text-center mt-8 mb-16'>
        <p className='tracking-widest text-sm text-[#00F076] uppercase mb-4'>
          Meet Your Instructor
        </p>
        <h1 className='text-4xl md:text-6xl font-bold'>
          Dr. Rajat <span className='text-[#00F076]'>Dandekar</span>
        </h1>
      </div>

      {/* Main Card */}
      <div className='max-w-6xl mx-auto bg-black border border-white/10 rounded-3xl p-8 md:p-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-start'>
          {/* Image */}
          <div className='flex justify-center'>
            <div className='rounded-3xl border-2 border-[#00F076] p-1'>
              <img
                src='/media/demoProfile.jpg'
                alt='Instructor'
                className='h-[320px] w-[260px] object-cover rounded-xl grayscale'
              />
            </div>
          </div>

          {/* Content */}
          <div className='md:col-span-2 space-y-8'>
            <div>
              <h3 className='text-[#00F076] font-semibold text-lg mb-2'>
                Teaching Experience
              </h3>
              <p className='text-white/80 leading-relaxed'>
                Dr. Dandekar has successfully taught the acclaimed “Reasoning
                LLM from Scratch” course, helping hundreds of students master
                complex AI concepts through practical, hands-on learning.
              </p>
            </div>

            <div>
              <h3 className='text-[#00F076] font-semibold text-lg mb-2'>
                Research Background
              </h3>
              <p className='text-white/80 leading-relaxed'>
                With extensive research experience in reinforcement learning and
                deep learning at top-tier institutions, Dr. Dandekar brings
                cutting-edge knowledge directly to the classroom.
              </p>
            </div>

            <div>
              <a
                href='#'
                className='inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-lg hover:border-[#00F076] hover:text-[#00F076] transition'
              >
                <span className='font-medium'>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='my-14 h-px w-full bg-white/10' />

        {/* Education Section */}
        <div className='max-w-4xl -mt-10 mx-auto'>
          <h2 className='text-2xl font-semibold text-center mb-8'>Education</h2>

          <div className='grid -mt-4 grid-cols-1 md:grid-cols-3 gap-6'>
            {/* PhD */}
            <div className='flex items-center gap-4 bg-black border border-white/10 rounded-xl px-6 py-5 hover:border-[#00F076]/40 transition'>
              <div className='w-12 h-12 rounded-lg bg-[#00F076]/10 flex items-center justify-center text-[#00F076] text-xl flex-shrink-0'>
                🎓
              </div>
              <div>
                <h3 className='text-lg font-semibold leading-tight'>PhD</h3>
                <p className='text-white/60 text-sm'>Purdue University</p>
              </div>
            </div>

            {/* MTech */}
            <div className='flex items-center gap-4 bg-black border border-white/10 rounded-xl px-6 py-5 hover:border-[#00F076]/40 transition'>
              <div className='w-12 h-12 rounded-lg bg-[#00F076]/10 flex items-center justify-center text-[#00F076] text-xl flex-shrink-0'>
                🎓
              </div>
              <div>
                <h3 className='text-lg font-semibold leading-tight'>MTech</h3>
                <p className='text-white/60 text-sm'>IIT Madras</p>
              </div>
            </div>

            {/* BTech */}
            <div className='flex items-center gap-4 bg-black border border-white/10 rounded-xl px-6 py-5 hover:border-[#00F076]/40 transition'>
              <div className='w-12 h-12 rounded-lg bg-[#00F076]/10 flex items-center justify-center text-[#00F076] text-xl flex-shrink-0'>
                🎓
              </div>
              <div>
                <h3 className='text-lg font-semibold leading-tight'>BTech</h3>
                <p className='text-white/60 text-sm'>IIT Madras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructor
