import React from 'react'
import { BookOpen, Bell, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useUserPurchases } from '../hooks/useUserPurchases'

const Dashboard: React.FC = () => {
  const { purchases, loading } = useUserPurchases();

  if (loading) {
    return (
      <div className='bg-black text-white flex min-h-screen items-center justify-center'>
        <div className='text-white'>Loading your courses...</div>
      </div>
    );
  }

  return (
    <div className='bg-black text-white flex'>
      {/* Main Content */}
      <main className='flex-1 px-4 sm:px-6 lg:px-8'>
        <div className='w-full'>
          {/* Header Row */}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>
              My Courses <span className='text-white/60'>({purchases.length})</span>
            </h1>

            <button className='flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:border-[#00F076]/40 transition w-full sm:w-auto'>
              <Bell size={16} />
              Notifications
            </button>
          </div>

          {purchases.length === 0 ? (
            /* Empty State Card */
            <div className='w-full min-h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]'>
              <div className='flex flex-col items-center justify-center text-center px-6 sm:px-10 py-20 sm:py-24'>
                <div className='mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10'>
                  <BookOpen size={28} className='text-white/70 sm:hidden' />
                  <BookOpen size={32} className='text-white/70 hidden sm:block' />
                </div>

                <h2 className='text-lg sm:text-xl font-semibold mb-2'>
                  No courses yet
                </h2>
                <p className='text-white/60 max-w-md text-sm sm:text-base mb-6 sm:mb-8'>
                  Start your learning journey by enrolling in a course
                </p>

                <Link
                  to='/courses'
                  className='rounded-xl bg-gradient-to-r from-[#00F076] to-[#00C864] px-6 sm:px-8 py-3 font-semibold text-black hover:opacity-90 transition hover:shadow-[0_0_25px_rgba(0,240,118,0.35)] w-full sm:w-auto'
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          ) : (
            /* Courses Grid */
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {purchases.map((purchase) => (
                <div key={purchase.id} className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-[#00F076]/40 transition'>
                  <div className='aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center'>
                    <Play size={32} className='text-[#00F076]' />
                  </div>
                  
                  <h3 className='text-lg font-semibold mb-2'>{purchase.course.title}</h3>
                  <p className='text-white/60 text-sm mb-4'>{purchase.course.description}</p>
                  
                  <div className='flex items-center justify-between'>
                    <span className='text-xs text-white/40'>by {purchase.course.instructor}</span>
                    <button className='bg-[#00F076] text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition'>
                      Continue
                    </button>
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
