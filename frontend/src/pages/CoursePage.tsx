import React, { useState } from "react"
import { BookOpen, Clock , ChevronRight, ArrowLeft } from "lucide-react"
import Header2 from "../components/Header2"

const curriculum = [
  { title: "Zoom Link for Lectures", lessons: 1 },
  { title: "Discord Link", lessons: 1 },
  { title: "GitHub Link", lessons: 1 },
  { title: "Introduction to Robotics & Imitation Learning", lessons: 4 },
  { title: "Deep Generative Modeling", lessons: 5 },
  { title: "Transformer Architecture from Scratch", lessons: 5 },
  { title: "ACT Policy Implementation", lessons: 3 },
  {
    title:
      "Live Robot Implementation – Implementing ACT Policy on SO-101",
    lessons: 2
  },
  { title: "ACT Architecture Deep Dive", lessons: 0 },
  { title: "SO-101 Robot & LeRobot Library", lessons: 0 }
]

const CoursePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (

    <section className="min-h-screen bg-black text-white px-6 pt-24 pb-5">
      <Header2 />
      <div className="max-w-full mx-auto space-y-10">

        {/* ===== TOP (OUTSIDE GRID) ===== */}
        <div className="space-y-4 mt-2">
          {/* Breadcrumb */}
          <div className="flex ">
          <ArrowLeft size={20} className="text-gray-400 mb-2 cursor-pointer mr-2" />
          <p className="text-sm text-gray-400">
            All Courses /{" "}
            <span className="text-gray-300">
               Modern Robot Learning from Scratch Bootcamp
            </span>
          </p>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-semibold leading-tight text-gray-100">
            Modern Robot Learning from Scratch Bootcamp
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
  {/* Instructor Avatar */}
  <div className="flex items-center gap-2">
    <div
      className="w-7 h-7 rounded-full
      bg-gradient-to-br from-[#00F076] to-[#00c45f]
      flex items-center justify-center
      text-black text-xs font-semibold"
    >
      T
    </div>
    <span className="text-gray-300">Team Vizuara</span>
  </div>

  {/* Lessons Count */}
  <div className="flex items-center border border-white/10 rounded-full p-3 gap-1.5">
    <BookOpen size={16} className="text-[#00F076]" />
    <span>22 lessons</span>
  </div>
</div>
        </div>

        {/* ===== GRID STARTS HERE ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero */}
            <div className="rounded-3xl overflow-hidden border border-white/10
              bg-gradient-to-br from-white/5 via-white/2 to-[#00F076]/10
              backdrop-blur-xl">
              <img
                src="/media/course/Vizuara-AI-Labs.png"
                alt="Course Banner"
                className="w-full object-cover"
              />
            </div>

            {/* About */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-semibold mb-2 text-gray-100">
                About This Course
              </h3>
              <p className="text-gray-300 text-base mt-5 leading-relaxed">
                Learn to build and deploy AI models in real robots with
                hands-on implementation.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Price */}
            <div className="rounded-3xl border border-white/10
              bg-gradient-to-br from-white/5 via-white/2 to-[#00F076]/5
              backdrop-blur-xl p-6">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-gray-400 line-through text-lg">
                  ₹34,999.00
                </span>
                <span className="text-3xl font-bold text-[#00F076]">
                  ₹24,999.00
                </span>
              </div>

              <button className="w-full py-3 rounded-xl font-semibold text-black
                bg-gradient-to-r from-[#00F076] to-[#00c45f]
                hover:shadow-[0_0_24px_rgba(0,240,118,0.4)]
                transition mb-3">
                Add to Cart
              </button>

              <button className="w-full py-3 rounded-xl font-semibold
                bg-[#00F076]/10 text-[#00F076]
                border border-[#00F076]/40
                hover:bg-[#00F076]/20 transition">
                Go To Checkout
              </button>
            </div>

            {/* Curriculum */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-[#00F076]" />
                  <h3 className="font-semibold text-2xl text-gray-100">
                    Course Curriculum
                  </h3>
                </div>
                <div className="flex items-center  gap-2 text-xs text-gray-400">
                  <Clock size={14} />
                  0 hrs 0 min
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-6">
                10 topics • 22 lessons
              </p>

              <div className="space-y-4">
                {curriculum.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-black/30"
                  >
                    
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === i ? null : i)
                      }
                      className="w-full flex gap-4 items-center px-4 py-4"
                    > <ChevronRight
                        size={16}
                        className={`transition ${
                          openIndex === i ? "rotate-90 transition-all ease-in-out duration-300" : ""
                        }`}
                      />
                      <span className="text-base text-left text-gray-200">
                        {item.title}
                      </span>
                     
                    </button>

                    {openIndex === i && (
                      <div className="px-4 pb-4  text-xs text-gray-400">
                        Lesson content unlocked after enrollment.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-semibold text-xl mb-4 text-gray-100">
                Course Details
              </h4>
              <div className="flex justify-between text-base text-gray-400">
                <span>Lessons</span>
                <span>22</span>
              </div>
              <div className="flex justify-between text-base text-gray-400 mt-2">
                <span>Last Updated</span>
                <span>Jan 19, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursePage
