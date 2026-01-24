import HeroSection from '../components/homeComp/HeroSection'
import Curriculum from './Curriculum'
import Curriculm2 from '../components/Curriculum/Curriculum2'
import Schedule from '../pages/Schedule'
import Instructor from '../pages/Instructor'
import Faq from '../pages/Faq'

export default function HomePage () {
  return (
    <div>
      <HeroSection />
      <Curriculum />
      <Curriculm2 />
      <Schedule />
      <Instructor />
      <Faq />

    </div>
  )
}
