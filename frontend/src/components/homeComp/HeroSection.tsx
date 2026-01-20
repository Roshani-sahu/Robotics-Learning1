import Header from '../Header'

export default function HeroSection () {
  return (
    <div
      className='relative w-full h-screen bg-black overflow-hidden bg-cover bg-center'
      style={{
        backgroundImage: `url('/media/HeroRobotics.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header */}
      <Header />

      {/* Black overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Content */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='text-center text-white px-4'>
          <h1 className='text-5xl font-bold mb-4'>Robotics Learning</h1>
          <p className='text-xl mb-8'>
            Explore the future of automation and robotics
          </p>
          <button className='bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
