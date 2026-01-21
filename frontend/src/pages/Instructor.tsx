import React from 'react'
import Header from '../components/Header'
const Instructor: React.FC = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white px-6 py-20'>
      <Header />
      {/* Top Heading */}
      <div className='text-center mb-16'>
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
            <div className='rounded-2xl border-4 border-[#00F076] p-1'>
              <img
                src='/media/instructor.png'
                alt='Instructor'
                className='h-[320px] w-[260px] object-cover rounded-xl grayscale'
              />
            </div>
          </div>

          {/* Content */}
          <div className='md:col-span-2 space-y-8'>
            {/* Teaching Experience */}
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

            {/* Research Background */}
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

            {/* LinkedIn Button */}
            <div>
              <a
                href='#'
                className='inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-lg hover:border-[#00F076] hover:text-[#00F076] transition'
              >
                <span className='text-lg'>in</span>
                <span className='font-medium'>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='my-12 h-px w-full bg-white/10' />

        {/* Education Section */}
        <div className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Education</h2>
          <p className='text-white/70 max-w-3xl mx-auto'>
            Ph.D. in Artificial Intelligence with specialization in
            Reinforcement Learning and Large Language Models from top-tier
            global research institutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Instructor
