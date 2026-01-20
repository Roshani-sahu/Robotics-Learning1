import Header from '../Header'

export default function HeroSection () {
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

      {/* Content */}
      <div className='relative z-10 flex justify-center h-full'>
        <div
          className='w-full max-w-[1200px] mx-auto px-6 text-center text-white'
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          {/* Written Content */}
          <div className='mt-36'>
            {/* Heading */}
            <h1 className='text-[90px] font-[700] leading-tight mt-20 '>
              Modern Robot Learning{' '}
              <span style={{ color: '#00F076' }}>Bootcamp</span>
            </h1>

            {/* Subheading */}
            <p className='text-[26px] font-[500] mb-8 text-gray-200'>
              Learn to build and deploy AI models in real robots
            </p>

            {/* Buttons */}
            <div className='flex items-center justify-center gap-6 mb-16 -mt-4'>
              <button
                className='px-8 py-2 width-214px rounded-lg font-semibold text-black transition hover:opacity-90'
                style={{ backgroundColor: '#00F076' }}
              >
                Enroll Now — ₹25,000
              </button>

              <button className='px-8 py-2 rounded-lg font-semibold bg-white text-black transition hover:bg-gray-200'>
                View Curriculum
              </button>
            </div>
          </div>

          {/* Center Image (unchanged position) */}
          <div className='flex justify-center -mt-12'>
            <img
              src='/media/mainImage.png'
              alt='Robotics Learning'
              width={475}
              height={428}
              className='select-none'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
