import { useNavigate } from 'react-router-dom'
import Header from '../Header'

export default function HeroSection () {
  const navigate = useNavigate()

  return (
    <div
      className='relative w-full min-h-[120vh] bg-black overflow-hidden'
      style={{
        backgroundImage: `url('/media/HeroRobotics.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header */}
      <Header />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/60'></div>

      {/* Styles */}
      <style>
        {`
          @keyframes floatImage {
            0% { transform: translate(0px, 0px); }
            25% { transform: translate(7px, -7px); }
            50% { transform: translate(-7px, 7px); }
            75% { transform: translate(7px, 7px); }
            100% { transform: translate(0px, 0px); }
          }

          /* ---------------- MOBILE ONLY ---------------- */
          @media (max-width: 768px) {
            .hero-content-shift {
              margin-top: 100px !important; /* 🔥 whole content down */
            }

            .hero-heading {
              font-size: 40px !important;
              line-height: 1.4 !important;
            }

            .hero-subheading {
              font-size: 18px !important;
              margin-top: 30px !important;
            }

            .hero-buttons {
              gap: 12px !important;
              margin-top: 30px !important;
            }

            .hero-button {
              padding: 10px 16px !important;
              font-size: 18px !important;
            }

            .hero-image-wrapper {
              margin-top: 40px !important;
            }

            .hero-image {
              width: 400px !important;
              height: auto !important;
            }
          }

          @media (max-width: 480px) {
            .hero-heading {
              font-size: 34px !important;
            }

            .hero-subheading {
              font-size: 16px !important;
            }

            .hero-image {
              width: 220px !important;
            }
          }
        `}
      </style>

      {/* Content */}
      <div className='relative z-10 flex justify-center h-full hero-content-shift'>
        <div
          className='w-full max-w-[1200px] mx-auto px-6 text-center text-white'
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          {/* Text */}
          <div className='mt-36'>
            <h1 className='text-[90px] font-[700] leading-tight mt-20 hero-heading'>
              Modern Robot Learning{' '}
              <span style={{ color: '#00F076' }}>Bootcamp</span>
            </h1>

            <p className='text-[26px] font-[500] mb-8 text-gray-200 hero-subheading'>
              Learn to build and deploy AI models in real robots
            </p>

            <div className='flex items-center justify-center gap-6 mb-16 -mt-4 hero-buttons'>
              <button
              onClick={() => navigate('/courses')}
                className='px-8 py-2 rounded-lg font-semibold text-black hero-button'
                style={{ backgroundColor: '#00F076' }}
              >
                Enroll Now — ₹25,000
              </button>

              <button
                onClick={() => navigate('/curriculum')}
                className='px-8 py-2 rounded-lg font-semibold bg-white text-black hero-button'
              >
                View Curriculum
              </button>
            </div>
          </div>

          {/* Image */}
          <div className='flex justify-center -mt-12 hero-image-wrapper'>
            <img
              src='/media/mainImage.png'
              alt='Robotics Learning'
              width={475}
              height={428}
              className='select-none hero-image'
              style={{ animation: 'floatImage 6s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
