import React from 'react'
import Header from '../components/Header'
import Curriculm2 from '../components/Curriculum/Curriculum2'

const Curriculum: React.FC = () => {
  const curriculumWeeks = [
    {
      week: 1,
      title: 'Introduction to Robotics & Imitation Learning',
      description:
        'Foundations of robotics systems and understanding how robots learn from demonstrations',
      topics: [
        'Robotics fundamentals & kinematics',
        'Introduction to imitation learning',
        'Setting up simulation environments'
      ]
    },
    {
      week: 2,
      title: 'Advanced Imitation Learning Techniques',
      description:
        'Deep dive into DAgger, BC, and advanced behavioral cloning methods',
      topics: [
        'Behavioral Cloning (BC) implementation',
        'DAgger algorithm and applications',
        'Data aggregation strategies'
      ]
    },
    {
      week: 3,
      title: 'Reinforcement Learning for Robotics',
      description:
        'Mastering RL algorithms for robotic control and decision making',
      topics: [
        'Markov Decision Processes (MDPs)',
        'Policy Gradient methods',
        'PPO and SAC for robotics'
      ]
    },
    {
      week: 4,
      title: 'AI Model Deployment on Real Robots',
      description:
        'From simulation to real-world deployment with ROS integration',
      topics: [
        'ROS (Robot Operating System) basics',
        'Model optimization for edge devices',
        'Real-time inference on robots'
      ]
    }
  ]

  return (
    <>
      {/* ===== Curriculum Section ===== */}
      <section className='w-full min-h-screen bg-black text-white py-24 px-6'>
        <Header />

        <div className='max-w-[1300px] mx-auto'>
          {/* Top Badge */}
          <div className='flex justify-center mb-6'>
            <span
              className='px-5 py-1.5 text-sm rounded-full border border-[#00F076]/60 
              text-[#fffff] bg-[#00F076]/10 backdrop-blur-sm'
            >
              Comprehensive Curriculum
            </span>
          </div>

          {/* Heading */}
          <h2 className='text-center text-5xl font-semibold mb-4 text-gray-200'>
            What You'll Learn
          </h2>

          {/* Subheading */}
          <p className='text-center text-gray-400 max-w-3xl mx-auto mb-20'>
            From foundational concepts to deploying AI models on real robots —
            master every aspect of modern robot learning.
          </p>

          {/* Curriculum List */}
          <div className='space-y-8'>
            {curriculumWeeks.map((weekData, index) => (
              <div
                key={weekData.week}
                className='relative group rounded-3xl border border-white/10 
                bg-gradient-to-br from-white/5 via-white/2 to-[#00F076]/5
                backdrop-blur-xl p-8 min-h-[280px]
                hover:border-[#00F076]/40 transition duration-500
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                hover:shadow-[0_12px_48px_rgba(0,240,118,0.15)]'
              >
                {/* Left Border Accent with Glow */}
                <div
                  className='absolute left-0 mt-16 -translate-y-1/2 w-[4px] h-3/5 
                  bg-gradient-to-b from-[#00F076] to-[#00c45f]
                  rounded-r-full shadow-[0_0_20px_rgba(0,240,118,0.7)]'
                />

                {/* Week Badge with Glow */}
                <div className='absolute top-0 -left-2 flex items-center gap-3'>
                  <div className='relative'>
                    <div className='absolute inset-0 w-10 h-10 bg-[#00F076] rounded-full blur-md opacity-50' />
                    <span
                      className='relative flex items-center justify-center w-10 h-10 
                      rounded-full bg-gradient-to-br from-[#00F076] to-[#00c45f] 
                      text-black text-sm font-bold shadow-[0_0_15px_rgba(0,240,118,0.6)]'
                    >
                      {weekData.week}
                    </span>
                  </div>
                  <span className='text-[#00F076] font-semibold text-lg mt-4 pl-2'>
                    Week {weekData.week}
                  </span>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6'>
                  {/* Left Content */}
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-semibold text-gray-100'>
                      {weekData.title}
                    </h3>

                    <p className='text-gray-300 leading-relaxed'>
                      {weekData.description}
                    </p>

                    {/* Topics List */}
                    <div className='space-y-2 pt-4'>
                      {weekData.topics.map((topic, idx) => (
                        <div key={idx} className='flex items-center gap-3'>
                          <div className='w-1.5 h-1.5 rounded-full bg-[#00F076]' />
                          <span className='text-gray-400 text-sm'>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Image/Visual */}
                  <div className='flex flex-col items-end justify-center'>
                    <div
                      className='relative w-full max-w-[300px] rounded-2xl overflow-hidden 
                      border border-white/10 group-hover:border-[#00F076]/30 transition duration-500'
                    >
                      <div className='absolute inset-0 bg-gradient-to-br from-[#00F076]/10 to-transparent' />
                      <img
                        src={`https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt='Curriculum Visual'
                        className='w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition duration-500'
                      />
                      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-gray-300'>
                            Hands-on Project
                          </span>
                          <div className='flex items-center gap-1 text-[#00F076] text-sm'>
                            <span>View Details</span>
                            <span className='group-hover:translate-x-1 transition-transform'>
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Hover Line */}
                <div
                  className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] 
                  bg-gradient-to-r from-transparent via-[#00F076] to-transparent 
                  group-hover:w-3/4 transition-all duration-500'
                />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className='flex justify-center mt-20'>
            <button
              className='relative px-10 py-4 rounded-full font-semibold 
              text-black bg-gradient-to-r from-[#00F076] to-[#00c45f]
              hover:shadow-[0_0_30px_rgba(0,240,118,0.4)]
              transition-all duration-300 transform hover:scale-[1.05]
              border border-[#00F076]/50'
            >
              View Complete Curriculum
              <div
                className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full animate-shimmer'
              />
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
