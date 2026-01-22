import React, { useState, useRef, useEffect } from 'react'
import {
  BookOpen,
  Bell,
  ChevronDown,
  ArrowLeft,
  Play,
  Maximize2,
  ExternalLink,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const [isBrowsing, setIsBrowsing] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>('')
  const [currentVideoType, setCurrentVideoType] = useState<string>('')
  const [activeSubpoint, setActiveSubpoint] = useState<{
    index: number
    subIndex: number
  } | null>(null)

  const videoContainerRef = useRef<HTMLDivElement>(null)

  const curriculum = [
    {
      title: 'Zoom Link for Lectures',
      lessons: 1,
      subpoints: [
        {
          title: 'Main Lecture Room',
          duration: 'Ongoing',
          videoId: 'dQw4w9WgXcQ',
          type: 'live'
        },
        {
          title: 'Discussion Room',
          duration: 'Breakout',
          videoId: 'dQw4w9WgXcQ',
          type: 'discussion'
        }
      ]
    },
    {
      title: 'Discord Link',
      lessons: 1,
      subpoints: [
        {
          title: 'Community Access',
          duration: '24/7',
          videoId: 'dQw4w9WgXcQ',
          type: 'community'
        }
      ]
    },
    {
      title: 'GitHub Link',
      lessons: 1,
      subpoints: [
        {
          title: 'Code Repository',
          duration: 'Access',
          videoId: 'dQw4w9WgXcQ',
          type: 'code'
        },
        {
          title: 'Project Templates',
          duration: 'Download',
          videoId: 'dQw4w9WgXcQ',
          type: 'templates'
        }
      ]
    },
    {
      title: 'Introduction to Robotics & Imitation Learning',
      lessons: 4,
      subpoints: [
        {
          title: 'What is Robot Learning?',
          duration: '15 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        },
        {
          title: 'Imitation Learning Basics',
          duration: '20 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        },
        {
          title: 'Demo: Simple Robot Arm',
          duration: '25 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'demo'
        },
        {
          title: 'Q&A Session',
          duration: '30 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'qa'
        }
      ]
    },
    {
      title: 'Deep Generative Modeling',
      lessons: 5,
      subpoints: [
        {
          title: 'VAE Fundamentals',
          duration: '22 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        },
        {
          title: 'GANs for Robotics',
          duration: '28 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        },
        {
          title: 'Diffusion Models Intro',
          duration: '35 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        },
        {
          title: 'Hands-on Coding Session',
          duration: '45 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'coding'
        },
        {
          title: 'Assignment Review',
          duration: '40 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'review'
        }
      ]
    },
    {
      title: 'Transformer Architecture from Scratch',
      lessons: 5,
      subpoints: [
        {
          title: 'Attention Mechanism',
          duration: '30 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        },
        {
          title: 'Multi-Head Attention',
          duration: '25 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        }
      ]
    },
    {
      title: 'ACT Policy Implementation',
      lessons: 3,
      subpoints: [
        {
          title: 'ACT Architecture Overview',
          duration: '40 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'lecture'
        },
        {
          title: 'Code Walkthrough',
          duration: '55 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'coding'
        },
        {
          title: 'Debugging Session',
          duration: '35 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'debug'
        }
      ]
    },
    {
      title: 'Live Robot Implementation – Implementing ACT Policy on SO-101',
      lessons: 2,
      subpoints: [
        {
          title: 'Hardware Setup',
          duration: '50 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'setup'
        },
        {
          title: 'Live Deployment',
          duration: '60 min',
          videoId: 'dQw4w9WgXcQ',
          type: 'deployment'
        }
      ]
    }
  ]

  const handleVideoSelect = (
    videoId: string,
    title: string,
    type: string,
    index: number,
    subIndex: number
  ) => {
    setSelectedVideo(videoId)
    setCurrentVideoTitle(title)
    setCurrentVideoType(type)
    setActiveSubpoint({ index, subIndex })

    // Open the parent curriculum item
    setOpenIndex(index)

    // Scroll to video container
    setTimeout(() => {
      videoContainerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Auto-open the curriculum item when active subpoint changes
  useEffect(() => {
    if (activeSubpoint) {
      setOpenIndex(activeSubpoint.index)
    }
  }, [activeSubpoint])

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
            <div className='space-y-8'>
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
                    Master real-world robot learning pipelines — from imitation
                    learning to transformer-based policies — implemented and
                    deployed on physical robots.
                  </p>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                {/* Left Column - Video Player (8 columns) */}
                <div className='lg:col-span-8' ref={videoContainerRef}>
                  <div
                    className={`rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden ${
                      isFullscreen ? 'fixed inset-4 z-50' : 'relative'
                    }`}
                  >
                    <div className='p-4 border-b border-white/10 flex items-center justify-between'>
                      <div>
                        <h3 className='font-semibold'>
                          {selectedVideo
                            ? `Now Playing: ${currentVideoTitle}`
                            : 'Video Player'}
                        </h3>
                        <p className='text-sm text-white/60'>
                          {selectedVideo
                            ? `Click any curriculum item to change lecture`
                            : 'Select a lecture from the curriculum to start playing'}
                        </p>
                      </div>
                      {selectedVideo && (
                        <div className='flex items-center gap-3'>
                          <a
                            href={`https://www.youtube.com/watch?v=${selectedVideo}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border border-white/20 hover:border-[#00F076] transition'
                          >
                            <ExternalLink size={14} />
                            Open in YouTube
                          </a>
                          <button
                            onClick={toggleFullscreen}
                            className='p-2 rounded-lg border border-white/20 hover:border-[#00F076] transition'
                          >
                            <Maximize2 size={18} />
                          </button>
                        </div>
                      )}
                    </div>

                    <div
                      className={`${
                        isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[500px]'
                      } bg-black`}
                    >
                      {selectedVideo ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedVideo}?rel=0&modestbranding=1`}
                          className='w-full h-full'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                      ) : (
                        <div className='w-full h-full flex flex-col items-center justify-center text-white/40'>
                          <div className='w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mb-4'>
                            <Play size={32} className='opacity-40' />
                          </div>
                          <p className='text-lg'>No video selected</p>
                          <p className='text-sm mt-2'>
                            Choose a lecture from the curriculum to begin
                          </p>
                        </div>
                      )}
                    </div>

                    {selectedVideo && (
                      <div className='p-4 border-t border-white/10'>
                        <div className='flex items-center gap-2 mb-2'>
                          <span className='px-2 py-1 rounded text-xs bg-[#00F076]/20 text-[#00F076]'>
                            {currentVideoType}
                          </span>
                          <span className='text-sm text-white/60'>
                            • Currently Playing
                          </span>
                        </div>
                        <p className='text-sm text-white/60'>
                          This lecture covers important concepts and practical
                          implementation details. Take notes and follow along
                          with the provided materials.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - About the Course (4 columns) */}
                <div className='lg:col-span-4'>
                  <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8'>
                    <div className='relative pl-6 mb-6'>
                      <div className='absolute left-0 top-0 h-full w-[2px] bg-[#00F076]/40' />
                      <h3 className='text-2xl font-semibold text-white mb-3'>
                        About This Course
                      </h3>
                      <p className='text-gray-300 leading-relaxed text-sm'>
                        This comprehensive bootcamp takes you through the
                        complete journey of modern robot learning. Starting from
                        fundamental concepts of imitation learning, we dive deep
                        into advanced topics including deep generative models,
                        transformer architectures, and their practical
                        implementation on real robots.
                      </p>
                    </div>

                    <div className='space-y-3'>
                      <div className='flex items-center gap-3 p-3 rounded-lg bg-white/5'>
                        <CheckCircle size={18} className='text-[#00F076]' />
                        <div>
                          <p className='font-medium text-sm'>
                            Hands-on Projects
                          </p>
                          <p className='text-xs text-white/60'>
                            Real robot implementation
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-3 p-3 rounded-lg bg-white/5'>
                        <CheckCircle size={18} className='text-[#00F076]' />
                        <div>
                          <p className='font-medium text-sm'>Live Sessions</p>
                          <p className='text-xs text-white/60'>
                            Weekly Q&A with instructors
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-3 p-3 rounded-lg bg-white/5'>
                        <CheckCircle size={18} className='text-[#00F076]' />
                        <div>
                          <p className='font-medium text-sm'>Code Repository</p>
                          <p className='text-xs text-white/60'>
                            Complete project codebase
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-3 p-3 rounded-lg bg-white/5'>
                        <CheckCircle size={18} className='text-[#00F076]' />
                        <div>
                          <p className='font-medium text-sm'>
                            Community Access
                          </p>
                          <p className='text-xs text-white/60'>
                            Discord community 24/7
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='mt-6 pt-6 border-t border-white/10'>
                      <h4 className='font-medium mb-2 text-sm'>
                        Prerequisites
                      </h4>
                      <ul className='text-xs text-white/60 space-y-1'>
                        <li>• Basic Python programming</li>
                        <li>• Understanding of linear algebra</li>
                        <li>• Familiarity with machine learning concepts</li>
                        <li>• No robotics experience required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Curriculum Section - Below the main grid */}
              <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-2xl font-semibold'>Course Curriculum</h3>
                  <div className='flex items-center gap-2 text-sm text-white/60'>
                    <Clock size={14} />
                    <span>22 sessions • 156 lectures</span>
                  </div>
                </div>

                <div className='space-y-2'>
                  {curriculum.map((item, i) => {
                    const isOpen = openIndex === i
                    return (
                      <div
                        key={i}
                        className='border border-white/10 rounded-xl overflow-hidden'
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className={`
                            w-full text-left px-4 py-3
                            transition-all duration-300
                            ${
                              isOpen
                                ? 'bg-[#00F076]/10'
                                : 'bg-white/5 hover:bg-white/10'
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
                                  {item.lessons} item
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
                        </button>

                        {isOpen && (
                          <div className='bg-black/50 border-t border-white/10 p-3 space-y-2'>
                            {item.subpoints.map((subpoint, subIndex) => {
                              const isActive =
                                activeSubpoint?.index === i &&
                                activeSubpoint?.subIndex === subIndex
                              return (
                                <div
                                  key={subIndex}
                                  className={`
                                    flex items-center justify-between p-3 rounded-lg transition
                                    ${
                                      isActive
                                        ? 'bg-[#00F076]/20 border border-[#00F076]/30'
                                        : 'hover:bg-white/5'
                                    }
                                  `}
                                >
                                  <div className='flex items-center gap-3'>
                                    <div
                                      className={`
                                      w-8 h-8 rounded-lg flex items-center justify-center
                                      ${
                                        isActive
                                          ? 'bg-[#00F076] text-black'
                                          : 'bg-white/10 text-white/60'
                                      }
                                    `}
                                    >
                                      {isActive ? (
                                        <Play size={14} fill='currentColor' />
                                      ) : (
                                        <Play size={14} />
                                      )}
                                    </div>
                                    <div>
                                      <p
                                        className={`text-sm font-medium ${
                                          isActive ? 'text-[#00F076]' : ''
                                        }`}
                                      >
                                        {subpoint.title}
                                        {isActive && (
                                          <span className='ml-2 text-xs px-1.5 py-0.5 rounded bg-[#00F076]/30'>
                                            Playing
                                          </span>
                                        )}
                                      </p>
                                      <div className='flex items-center gap-2 text-xs text-white/60'>
                                        <span>{subpoint.duration}</span>
                                        <span className='px-1.5 py-0.5 rounded text-[10px] bg-white/10'>
                                          {subpoint.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() =>
                                      handleVideoSelect(
                                        subpoint.videoId,
                                        subpoint.title,
                                        subpoint.type,
                                        i,
                                        subIndex
                                      )
                                    }
                                    className={`
                                      text-xs px-3 py-1.5 rounded-lg border transition
                                      ${
                                        isActive
                                          ? 'bg-[#00F076] text-black border-[#00F076]'
                                          : 'bg-[#00F076]/20 border-[#00F076]/30 text-[#00F076] hover:bg-[#00F076]/30'
                                      }
                                    `}
                                  >
                                    {isActive ? 'Playing' : 'Play'}
                                  </button>
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
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
