import React, { useState, useRef, useEffect } from 'react'
import {
  BookOpen,
  ChevronDown,
  Play,
  Maximize2,
  Minimize2,
  ExternalLink,
  Clock,
  Users,
  CheckCircle,
  RotateCw,
  X
} from 'lucide-react'

const PurchasedCourse: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>('')
  const [currentVideoType, setCurrentVideoType] = useState<string>('')
  const [activeSubpoint, setActiveSubpoint] = useState<{
    index: number
    subIndex: number
  } | null>(null)
  const [isRotated, setIsRotated] = useState(false)

  const videoContainerRef = useRef<HTMLDivElement>(null)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  const curriculum = [
    {
      title: 'Zoom Link for Lectures',
      lessons: 1,
      subpoints: [
        {
          title: 'Main Lecture Room',
          duration: 'Ongoing',
          videoId: 'htjRUL3neMg',
          type: 'live'
        },
        {
          title: 'Discussion Room',
          duration: 'Breakout',
          videoId: 'htjRUL3neMg',
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
          videoId: 'htjRUL3neMg',
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
          videoId: 'htjRUL3neMg',
          type: 'code'
        },
        {
          title: 'Project Templates',
          duration: 'Download',
          videoId: 'htjRUL3neMg',
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
          videoId: 'htjRUL3neMg',
          type: 'lecture'
        },
        {
          title: 'Imitation Learning Basics',
          duration: '20 min',
          videoId: 'htjRUL3neMg',
          type: 'lecture'
        },
        {
          title: 'Demo: Simple Robot Arm',
          duration: '25 min',
          videoId: 'htjRUL3neMg',
          type: 'demo'
        },
        {
          title: 'Q&A Session',
          duration: '30 min',
          videoId: 'htjRUL3neMg',
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
          videoId: 'htjRUL3neMg',
          type: 'lecture'
        },
        {
          title: 'GANs for Robotics',
          duration: '28 min',
          videoId: 'htjRUL3neMg',
          type: 'lecture'
        },
        {
          title: 'Diffusion Models Intro',
          duration: '35 min',
          videoId: 'htjRUL3neMg',
          type: 'lecture'
        },
        {
          title: 'Hands-on Coding Session',
          duration: '45 min',
          videoId: 'htjRUL3neMg',
          type: 'coding'
        },
        {
          title: 'Assignment Review',
          duration: '40 min',
          videoId: 'htjRUL3neMg',
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
          videoId: 'htjRUL3neMg',
          type: 'lecture'
        },
        {
          title: 'Multi-Head Attention',
          duration: '25 min',
          videoId: 'htjRUL3neMg',
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
          videoId: 'htjRUL3neMg',
          type: 'lecture'
        },
        {
          title: 'Code Walkthrough',
          duration: '55 min',
          videoId: 'htjRUL3neMg',
          type: 'coding'
        },
        {
          title: 'Debugging Session',
          duration: '35 min',
          videoId: 'htjRUL3neMg',
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
          videoId: 'htjRUL3neMg',
          type: 'setup'
        },
        {
          title: 'Live Deployment',
          duration: '60 min',
          videoId: 'htjRUL3neMg',
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
    if (!isFullscreen) {
      setIsFullscreen(true)
      setIsRotated(false)
    } else {
      setIsFullscreen(false)
      setIsRotated(false)
    }
  }

  const toggleRotate = () => {
    setIsRotated(!isRotated)
  }

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
        setIsRotated(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isFullscreen])

  // Auto-open the curriculum item when active subpoint changes
  useEffect(() => {
    if (activeSubpoint) {
      setOpenIndex(activeSubpoint.index)
    }
  }, [activeSubpoint])

  return (
    <div className='bg-black text-white min-h-screen'>
      {/* Course Details View */}
      <div className='space-y-8 p-4 sm:p-6 lg:p-8'>
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
              learning to transformer-based policies — implemented and deployed
              on physical robots.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Left Column - Video Player (8 columns) */}
          <div className='lg:col-span-8' ref={videoContainerRef}>
            <div
              ref={fullscreenRef}
              className={`
                rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden
                ${
                  isFullscreen
                    ? 'fixed inset-0 z-50 m-0 rounded-none'
                    : 'relative'
                }
                ${isRotated ? 'transform rotate-90' : ''}
              `}
              style={{
                transition: 'transform 0.3s ease'
              }}
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
                      className='hidden sm:flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border border-white/20 hover:border-[#00F076] transition'
                    >
                      <ExternalLink size={14} />
                      <span className='hidden sm:inline'>Open in YouTube</span>
                    </a>
                    {/* Mobile rotate button - only show in fullscreen mode */}
                    {isFullscreen && (
                      <button
                        onClick={toggleRotate}
                        className='p-2 rounded-lg border border-white/20 hover:border-[#00F076] transition sm:hidden'
                        title='Rotate Screen'
                      >
                        <RotateCw size={18} />
                      </button>
                    )}
                    <button
                      onClick={toggleFullscreen}
                      className='p-2 rounded-lg border border-white/20 hover:border-[#00F076] transition'
                    >
                      {isFullscreen ? (
                        <Minimize2 size={18} />
                      ) : (
                        <Maximize2 size={18} />
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div
                className={`
                  ${isFullscreen ? 'h-[calc(100vh-64px)]' : 'h-[500px]'}
                  ${isRotated ? 'h-[calc(100vw-64px)]' : ''}
                  bg-black
                `}
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
                    implementation details. Take notes and follow along with the
                    provided materials.
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
                  This comprehensive bootcamp takes you through the complete
                  journey of modern robot learning. Starting from fundamental
                  concepts of imitation learning, we dive deep into advanced
                  topics including deep generative models, transformer
                  architectures, and their practical implementation on real
                  robots.
                </p>
              </div>

              <div className='space-y-3'>
                <div className='flex items-center gap-3 p-3 rounded-lg bg-white/5'>
                  <CheckCircle size={18} className='text-[#00F076]' />
                  <div>
                    <p className='font-medium text-sm'>Hands-on Projects</p>
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
                    <p className='font-medium text-sm'>Community Access</p>
                    <p className='text-xs text-white/60'>
                      Discord community 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-6 pt-6 border-t border-white/10'>
                <h4 className='font-medium mb-2 text-sm'>Prerequisites</h4>
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
                      <span className='text-sm font-medium'>{item.title}</span>
                      <div className='flex items-center gap-3'>
                        {item.lessons > 0 && (
                          <span className='text-xs px-3 py-1 rounded-full bg-white/10 min-w-[4rem] text-center'>
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
                                text-xs px-4 py-1.5 rounded-lg border transition whitespace-nowrap
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
    </div>
  )
}

export default PurchasedCourse
