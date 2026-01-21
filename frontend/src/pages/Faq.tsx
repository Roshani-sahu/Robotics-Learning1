import React, { useState } from 'react'
import Header from '../components/Header'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What are the prerequisites for this bootcamp?',
    answer:
      'Basic programming knowledge and familiarity with Python is recommended. No prior robotics experience is required.'
  },
  {
    question: 'Will I get access to recordings if I miss a session?',
    answer:
      'Yes, all enrolled students will get lifetime access to session recordings.'
  },
  {
    question: 'Do I need to have my own robot to participate?',
    answer:
      'No, simulations and guided setups will be provided. Physical robots are optional.'
  },
  {
    question: 'What materials will be provided?',
    answer:
      'You will receive comprehensive lecture notes, code repositories, assignments, and project resources.'
  },
  {
    question: 'Is there any certification provided?',
    answer:
      'Yes, a certificate of completion will be provided after successfully finishing the bootcamp.'
  },
  {
    question: 'Can I get a refund if I’m not satisfied?',
    answer:
      'Refund policies will be shared during enrollment. Please review them carefully before registering.'
  }
]

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='min-h-screen w-full bg-black text-white px-6 py-24'>
      <Header />
      {/* Top Badge */}
      <div className='flex justify-center mb-6 mt-6'>
        <span
          className='px-5 py-1.5 text-sm rounded-full border border-[#00F076]/60 
              text-[#00F076] bg-[#00F076]/10 backdrop-blur-sm'
        >
          Questions Answered
        </span>
      </div>
      {/* Heading */}
      <div className='text-center mb-14'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          Frequently Asked <span className='text-[#00F076]'>Questions</span>
        </h1>
      </div>

      {/* FAQ Container */}
      <div className='max-w-6xl mx-auto space-y-4'>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className='
                border border-white
                rounded-xl
                px-8 py-4
                cursor-pointer
                transition
                hover:border-[#00F076]
              '
              onClick={() => toggleFaq(index)}
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-base md:text-lg font-semibold'>
                  {faq.question}
                </h3>

                <span className='ml-4 text-[#00F076]'>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>

              {isOpen && (
                <p className='mt-3 text-sm text-white/70 leading-relaxed'>
                  {faq.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
