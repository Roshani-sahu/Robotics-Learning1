import React, { useState } from 'react'
import {
  BookOpen,
  Bell,
  CheckCircle,
  Clock,
  ChevronDown,
  ArrowLeft,
  Users,
  Calendar,
  BarChart
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const [isBrowsing, setIsBrowsing] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const curriculum = [
    { title: 'Zoom Link for Lectures', lessons: 1 },
    { title: 'Discord Link', lessons: 1 },
    { title: 'GitHub Link', lessons: 1 },
    { title: 'Introduction to Robotics & Imitation Learning', lessons: 4 },
    { title: 'Deep Generative Modeling', lessons: 5 },
    { title: 'Transformer Architecture from Scratch', lessons: 5 },
    { title: 'ACT Policy Implementation', lessons: 3 },
    {
      title: 'Live Robot Implementation – Implementing ACT Policy on SO-101',
      lessons: 2
    },
    { title: 'ACT Architecture Deep Dive', lessons: 0 },
    { title: 'SO-101 Robot & LeRobot Library', lessons: 0 }
  ]

  const upcomingSessions = [
    {
      id: 1,
      title: 'Live Q&A Session',
      date: 'Tomorrow',
      time: '7:00 PM',
      instructor: 'Dr. Alex Johnson'
    },
    {
      id: 2,
      title: 'Project Review',
      date: 'Jan 28',
      time: '6:30 PM',
      instructor: 'Sarah Chen'
    },
    {
      id: 3,
      title: 'Advanced Concepts Workshop',
      date: 'Feb 2',
      time: '8:00 PM',
      instructor: 'Mike Rodriguez'
    }
  ]

  const completedLectures = [
    {
      id: 1,
      title: 'Introduction to Robotics & Imitation Learning',
      duration: '45 min',
      date: 'Jan 20'
    },
    {
      id: 2,
      title: 'Deep Generative Modeling Fundamentals',
      duration: '60 min',
      date: 'Jan 21'
    },
    {
      id: 3,
      title: 'Transformer Architecture Basics',
      duration: '75 min',
      date: 'Jan 22'
    },
    {
      id: 4,
      title: 'ACT Policy Implementation Part 1',
      duration: '50 min',
      date: 'Jan 23'
    }
  ]

  return (
    <div className='bg-black text-white flex'>
      {/* Main Content */}
      <main
        className='
          flex-1
          px-4 sm:px-6 lg:px-8
          py-6
        '
      >
        <div className='w-full'>
          {/* Header Row */}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>
              {isBrowsing ? 'Course Dashboard' : 'My Courses'}{' '}
              <span className='text-white/60'>({isBrowsing ? '1' : '0'})</span>
            </h1>

            <div className='flex items-center gap-3'>
              {isBrowsing && (
                <button
                  onClick={() => setIsBrowsing(false)}
                  className='
                    flex items-center justify-center gap-2
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4 py-2
                    text-sm text-white/70
                    hover:border-[#00F076]/40
                    transition
                    w-full sm:w-auto
                  '
                >
                  <ArrowLeft size={16} />
                  Back to Dashboard
                </button>
              )}
              <button
                className='
                  flex items-center justify-center gap-2
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-4 py-2
                  text-sm text-white/70
                  hover:border-[#00F076]/40
                  transition
                  w-full sm:w-auto
                '
              >
                <Bell size={16} />
                Enabling...
              </button>
            </div>
          </div>

          {/* Main Content Container */}
          {!isBrowsing ? (
            /* Empty State Card */
            <div
              className='
                w-full
                min-h-[420px]
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(0,0,0,0.6)]
              '
            >
              <div
                className='
                  flex flex-col items-center justify-center text-center
                  px-6 sm:px-10
                  py-20 sm:py-24
                '
              >
                {/* Icon */}
                <div className='mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10'>
                  <BookOpen size={28} className='text-white/70 sm:hidden' />
                  <BookOpen
                    size={32}
                    className='text-white/70 hidden sm:block'
                  />
                </div>

                {/* Text */}
                <h2 className='text-lg sm:text-xl font-semibold mb-2'>
                  No courses yet
                </h2>
                <p className='text-white/60 max-w-md text-sm sm:text-base mb-6 sm:mb-8'>
                  Start your learning journey by enrolling in a course
                </p>

                {/* CTA */}
                <button
                  onClick={() => setIsBrowsing(true)}
                  className='
                    rounded-xl
                    bg-gradient-to-r from-[#00F076] to-[#00C864]
                    px-6 sm:px-8
                    py-3
                    font-semibold
                    text-black
                    hover:opacity-90
                    transition
                    hover:shadow-[0_0_25px_rgba(0,240,118,0.35)]
                    w-full sm:w-auto
                  '
                >
                  Browse Courses
                </button>
              </div>
            </div>
          ) : (
            /* Course Details View */
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
              {/* Left Column - Course Content (8 columns) */}
              <div className='lg:col-span-8 space-y-8'>
                {/* Course Hero Image */}
                <div className='relative rounded-3xl overflow-hidden'>
                  <img
                    src='/media/course/Vizuara-AI-Labs.png'
                    alt='Course Banner'
                    className='w-full h-[300px] md:h-[400px] object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent' />

                  {/* Course Info Overlay */}
                  <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
                    <div className='flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3'>
                      <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00F076]/20 border border-[#00F076]/30'>
                        <div className='w-5 h-5 rounded-full bg-[#00F076] flex items-center justify-center text-xs font-bold'>
                          ✓
                        </div>
                        <span>Purchased • Lifetime Access</span>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <BookOpen size={14} />
                        <span>22 Sessions • 156 Lectures</span>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <Users size={14} />
                        <span>Active Community</span>
                      </div>
                    </div>
                    <h2 className='text-2xl md:text-3xl font-bold text-white'>
                      Modern Robot Learning from Scratch Bootcamp
                    </h2>
                    <p className='text-gray-300 mt-2 max-w-3xl'>
                      Master real-world robot learning pipelines — from
                      imitation learning to transformer-based policies —
                      implemented and deployed on physical robots.
                    </p>
                  </div>
                </div>

                {/* Upcoming Sessions */}
                <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8'>
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                      <Calendar size={20} className='text-[#00F076]' />
                      <h3 className='text-xl font-semibold'>
                        Upcoming Sessions
                      </h3>
                    </div>
                    <span className='text-sm text-white/60'>
                      3 sessions scheduled
                    </span>
                  </div>

                  <div className='space-y-4'>
                    {upcomingSessions.map(session => (
                      <div
                        key={session.id}
                        className='flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-white/20 transition'
                      >
                        <div className='flex items-center gap-4'>
                          <div className='w-12 h-12 rounded-xl bg-[#00F076]/10 border border-[#00F076]/20 flex items-center justify-center'>
                            <Calendar size={20} className='text-[#00F076]' />
                          </div>
                          <div>
                            <h4 className='font-medium'>{session.title}</h4>
                            <div className='flex items-center gap-3 text-sm text-white/60 mt-1'>
                              <span>{session.instructor}</span>
                              <span>•</span>
                              <span>
                                {session.date} at {session.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className='px-4 py-2 rounded-lg bg-[#00F076]/20 border border-[#00F076]/30 text-[#00F076] text-sm hover:bg-[#00F076]/30 transition'>
                          Join
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recently Completed */}
                <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8'>
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                      <CheckCircle size={20} className='text-[#00F076]' />
                      <h3 className='text-xl font-semibold'>
                        Recently Completed
                      </h3>
                    </div>
                    <span className='text-sm text-white/60'>
                      4 lectures completed
                    </span>
                  </div>

                  <div className='space-y-3'>
                    {completedLectures.map(lecture => (
                      <div
                        key={lecture.id}
                        className='flex items-center justify-between p-4 rounded-xl border border-[#00F076]/20 bg-[#00F076]/5'
                      >
                        <div className='flex items-center gap-3'>
                          <div className='w-8 h-8 rounded-full bg-[#00F076] flex items-center justify-center'>
                            <CheckCircle size={16} className='text-black' />
                          </div>
                          <div>
                            <h4 className='text-sm font-medium'>
                              {lecture.title}
                            </h4>
                            <div className='flex items-center gap-3 text-xs text-white/60 mt-1'>
                              <span>{lecture.duration}</span>
                              <span>•</span>
                              <span>Completed on {lecture.date}</span>
                            </div>
                          </div>
                        </div>
                        <button className='text-sm text-white/60 hover:text-[#00F076] transition'>
                          Review
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar (4 columns) */}
              <div className='lg:col-span-4 space-y-8'>
                {/* Course Stats */}
                <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6'>
                  <div className='flex items-center gap-3 mb-6'>
                    <BarChart size={20} className='text-[#00F076]' />
                    <h3 className='text-xl font-semibold'>Course Overview</h3>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-white/5'>
                      <span className='text-sm text-white/70'>
                        Total Sessions
                      </span>
                      <span className='font-semibold'>22</span>
                    </div>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-white/5'>
                      <span className='text-sm text-white/70'>
                        Lectures Completed
                      </span>
                      <span className='font-semibold text-[#00F076]'>
                        8/156
                      </span>
                    </div>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-white/5'>
                      <span className='text-sm text-white/70'>
                        Live Sessions Attended
                      </span>
                      <span className='font-semibold'>4</span>
                    </div>
                    <div className='flex items-center justify-between p-3 rounded-lg bg-white/5'>
                      <span className='text-sm text-white/70'>
                        Hours Consumed
                      </span>
                      <span className='font-semibold'>14.5 hrs</span>
                    </div>
                  </div>
                </div>

                {/* Full Curriculum */}
                <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6'>
                  <div className='flex items-center justify-between mb-6'>
                    <h3 className='text-xl font-semibold'>Full Curriculum</h3>
                    <div className='flex items-center gap-2 text-sm text-white/60'>
                      <Clock size={14} />
                      <span>22 sessions</span>
                    </div>
                  </div>

                  <div className='space-y-2 max-h-[500px] overflow-y-auto pr-2'>
                    {curriculum.map((item, i) => {
                      const isOpen = openIndex === i
                      return (
                        <button
                          key={i}
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className={`
                            w-full text-left rounded-xl px-4 py-3
                            border transition-all duration-300
                            ${
                              isOpen
                                ? 'bg-[#00F076]/10 border-[#00F076]/40'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }
                          `}
                        >
                          <div className='flex items-center justify-between'>
                            <span className='text-sm font-medium'>
                              {item.title}
                            </span>
                            <div className='flex items-center gap-3'>
                              {item.lessons > 0 && (
                                <span className='text-xs px-2 py-1 rounded-full bg-white/10'>
                                  {item.lessons} lesson
                                  {item.lessons !== 1 ? 's' : ''}
                                </span>
                              )}
                              <ChevronDown
                                size={16}
                                className={`
                                  transition-transform duration-300
                                  ${
                                    isOpen
                                      ? 'rotate-180 text-[#00F076]'
                                      : 'text-white/40'
                                  }
                                `}
                              />
                            </div>
                          </div>
                          {isOpen && (
                            <div className='mt-3 text-xs text-white/60'>
                              {item.lessons > 0
                                ? `${item.lessons} lesson${
                                    item.lessons !== 1 ? 's' : ''
                                  } available for viewing`
                                : 'Coming soon'}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Instructor Info */}
                <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6'>
                  <h3 className='text-xl font-semibold mb-4'>Instructor</h3>
                  <div className='flex items-center gap-4'>
                    <div className='w-14 h-14 rounded-full bg-gradient-to-br from-[#00F076] to-[#00C864] flex items-center justify-center text-xl font-bold'>
                      AJ
                    </div>
                    <div>
                      <h4 className='font-semibold'>Dr. Alex Johnson</h4>
                      <p className='text-sm text-white/60 mt-1'>
                        Lead Robotics Researcher
                      </p>
                      <p className='text-xs text-white/40 mt-1'>
                        10+ years experience in AI & Robotics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
