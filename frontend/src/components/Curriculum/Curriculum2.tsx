import React from 'react'

const features = [
  {
    title: 'Live Interactive Sessions',
    desc: '2-hour live classes every Saturday with real-time Q&A and doubt clearing'
  },
  {
    title: 'Live Interactive Sessions',
    desc: '2-hour live classes every Saturday with real-time Q&A and doubt clearing'
  },
  {
    title: 'Live Interactive Sessions',
    desc: '2-hour live classes every Saturday with real-time Q&A and doubt clearing'
  },
  {
    title: 'Live Interactive Sessions',
    desc: '2-hour live classes every Saturday with real-time Q&A and doubt clearing'
  },
  {
    title: 'Live Interactive Sessions',
    desc: '2-hour live classes every Saturday with real-time Q&A and doubt clearing'
  },
  {
    title: 'Live Interactive Sessions',
    desc: '2-hour live classes every Saturday with real-time Q&A and doubt clearing'
  }
]

const Curriculm2: React.FC = () => {
  return (
    <section className='w-full min-h-screen bg-black text-white py-28 px-6'>
      <div className='max-w-[1300px] mx-auto'>
        {/* Badge */}
        <div className='flex justify-center mb-4'>
          <span className='px-5 py-1 text-sm rounded-full border border-[#00F076] text-[#00F076]'>
            Why This Bootcamp
          </span>
        </div>

        {/* Heading */}
        <h2 className='text-center text-5xl font-semibold mb-4 text-gray-200'>
          Everything You Need to Succeed
        </h2>

        {/* Subheading */}
        <p className='text-center text-gray-400 max-w-3xl mx-auto mb-20'>
          A complete learning experience designed to take you from fundamentals
          to deployment
        </p>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {features.map((item, index) => (
            <div
              key={index}
              className='relative rounded-3xl border border-[#00F076]/40 
              bg-gradient-to-br from-white/5 via-white/0 to-[#00F076]/10
              backdrop-blur-xl p-8 min-h-[260px]
              hover:border-[#00F076] transition duration-300'
            >
              {/* Icon */}
              <div
                className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F076] to-[#00c45f] 
  flex items-center justify-center mb-4 shadow-[0_0_6px_rgba(0,240,118,0.5)]'
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-black'
                >
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold mb-3 text-gray-100'>
                {item.title}
              </h3>

              {/* Description */}
              <p className='text-gray-400 text-sm leading-relaxed mb-8'>
                {item.desc}
              </p>

              {/* Explore */}
              <div className='flex items-center gap-2 text-sm text-white font-medium cursor-pointer group'>
                <span>Explore More</span>
                <span className='transition-transform group-hover:translate-x-1'>
                  ▶
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Curriculm2
