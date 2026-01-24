import React, { useEffect, useState } from 'react'
import { BookOpen, Bell, PlayCircle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { paymentAPI, courseAPI } from '../services/api'
import { useAuth } from '../context/AuthContext'

interface Purchase {
  id: string
  courseId: string
  course: {
    title: string
    description: string
    thumbnail: string
    instructor?: string
  }
  purchaseDate: string
}

const Dashboard: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loading, setLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const { user, loading: authLoading } = useAuth() // Get auth state
  const navigate = useNavigate()

  useEffect(() => {
    if (!authLoading && user) {
      fetchPurchases()
    } else if (!authLoading && !user) {
      // Handle unauthenticated case (optional, maybe redirect)
      setLoading(false)
    }
  }, [user, authLoading])

  const fetchPurchases = async () => {
    try {
      const response = await paymentAPI.getUserPurchases()
      setPurchases(response.data.purchases)
    } catch (error) {
      console.error('Failed to fetch purchases', error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageError = (courseId: string) => {
    setImageErrors(prev => new Set(prev).add(courseId))
  }

  const handleAccessCourse = (courseId: string) => {
    navigate(`/purchased-course/${courseId}`)
  }

  return (
    <div className='bg-black text-white min-h-screen flex'>
      {/* Main Content */}
      <main className='flex-1 px-4 sm:px-6 lg:px-8 py-8'>
        <div className='w-full max-w-7xl mx-auto'>
          {/* Header Row */}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>
              My Courses <span className='text-white/60'>({purchases.length})</span>
            </h1>

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
              Notifications
            </button>
          </div>

          {loading ? (
            <div className='text-center py-20 text-white/60'>Loading courses...</div>
          ) : purchases.length === 0 ? (
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
                  py-20 sm:py-24'
              >
                {/* Icon */}
                <div className='mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10'>
                  <BookOpen size={28} className='text-white/70 sm:hidden' />
                  <BookOpen size={32} className='text-white/70 hidden sm:block' />
                </div>

                {/* Text */}
                <h2 className='text-lg sm:text-xl font-semibold mb-2'>
                  No courses yet
                </h2>
                <p className='text-white/60 max-w-md text-sm sm:text-base mb-6 sm:mb-8'>
                  Start your learning journey by enrolling in a course
                </p>

                {/* CTA */}
                <Link
                  to='/courses'
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
                </Link>
              </div>
            </div>
          ) : (
            /* Course Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="
                     rounded-2xl
                     border border-white/10
                     bg-white/5
                     overflow-hidden
                     hover:border-[#00F076]/40
                     transition duration-300
                   "
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gray-800">
                    {purchase.course?.thumbnail && !imageErrors.has(purchase.courseId) ? (
                      <img
                        src={purchase.course.thumbnail}
                        alt={purchase.course.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(purchase.courseId)}
                      />
                    ) : (
                      <img
                        src="/media/course/Vizuara-AI-Labs.png"
                        alt="Course placeholder"
                        className="w-full h-full object-cover opacity-50"
                      />
                    )}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#00F076] border border-[#00F076]/20">
                      Active
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold line-clamp-2 mb-1">
                        {purchase.course?.title || 'Unknown Course'}
                      </h3>
                      <p className="text-sm text-white/50 line-clamp-2">
                        {purchase.course?.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                      <button
                        onClick={() => handleAccessCourse(purchase.courseId)}
                        className="flex-1 bg-[#00F076] hover:bg-[#00D064] text-black font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition"
                      >
                        <PlayCircle size={18} />
                        Access Course
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
