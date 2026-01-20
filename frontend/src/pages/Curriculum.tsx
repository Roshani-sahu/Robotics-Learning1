import React from 'react'
import Header from '../components/Header'
import Curriculm2 from '../components/Curriculum/Curriculum2'

const Curriculum: React.FC = () => {
  return (
    <>
      {/* ===== Curriculum Section ===== */}
      <section className='w-full bg-black py-24 px-6 text-white'>
        <Header />

        <div className='max-w-[1200px] mx-auto'>
          {/* Top Badge */}
          <div className='flex justify-center mb-4'>
            <span className='px-4 py-1 text-sm rounded-full border border-[#00F076] text-[#ffffff]'>
              Comprehensive Curriculum
            </span>
          </div>

          {/* Heading */}
          <h2 className='text-center text-4xl font-semibold mb-4'>
            What You’ll Learn
          </h2>

          {/* Subheading */}
          <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>
            From foundational concepts to deploying AI models on real robots —
            master every aspect of modern robot learning.
          </p>

          {/* Curriculum List */}
          <div className='space-y-8'>
            {[1, 2, 3, 4].map(week => (
              <div
                key={week}
                className='relative flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#0b0b0f] via-[#0e0e14] to-[#0b0b0f] border border-white/5 px-8 py-10'
              >
                {/* Left Border Accent */}
                <div className='absolute left-0 top-0 h-full w-[3px] bg-[#00F076] rounded-l-2xl' />

                {/* Left Content */}
                <div className='flex-1 pr-10'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full bg-[#00F076] text-black text-sm font-bold'>
                      ✓
                    </span>
                    <span className='text-[#00F076] font-semibold'>
                      Week {week}
                    </span>
                  </div>

                  <h3 className='text-xl font-semibold mb-2'>
                    Introduction to Robotics & Imitation Learning
                  </h3>

                  <p className='text-gray-400 max-w-xl'>
                    Foundations of robotics systems and understanding how robots
                    learn from demonstrations
                  </p>
                </div>

                {/* Right Image */}
                <div className='flex-shrink-0'>
                  <img
                    src='/media/blankImage.png'
                    alt='Curriculum Visual'
                    className='w-[220px] h-auto select-none'
                  />
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className='flex justify-center mt-16'>
            <button className='px-8 py-3 rounded-full font-semibold text-black bg-[#00F076] hover:opacity-90 transition'>
              View More
            </button>
          </div>
        </div>
      </section>

      {/* ===== Curriculum 2 Section (Just Below) ===== */}
      <Curriculm2 />
    </>
  )
}

export default Curriculum
