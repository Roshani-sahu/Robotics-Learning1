import React, { useState } from "react"
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ChevronDown
} from "lucide-react"
import Header2 from "../components/Header2"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-black text-white px-6 pt-24 pb-16">
      <Header2 />

      <div className="max-w-[1350px] mx-auto space-y-16">

        {/* ===== TOP ===== */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ArrowLeft
              size={18}
              className="cursor-pointer hover:text-white transition"
              onClick={() => navigate("/")}
            />
            <span>Modern Robot Learning from Scratch Bootcamp</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-100 max-w-4xl">
            Modern Robot Learning from Scratch Bootcamp
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#00F076]/20
                flex items-center justify-center text-[#00F076]
                text-xs font-semibold">
                T
              </div>
              <span className="text-gray-300">Team Vizuara</span>
            </div>

            <span className="opacity-40">•</span>

            <div className="flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>22 Sessions</span>
            </div>

            <span className="opacity-40">•</span>

            <span className="text-[#00F076]">Live + Recorded</span>
          </div>
        </div>

        {/* ===== MAIN LAYOUT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ===== LEFT CONTENT ===== */}
          <div className="lg:col-span-8 space-y-14">

            {/* HERO */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/media/course/Vizuara-AI-Labs.png"
                alt="Course Banner"
                className="w-full  md:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t
                from-black/90 via-black/40 to-transparent" />
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2
                w-[60%] h-40 bg-[#00F076]/20 blur-3xl opacity-40" />
            </div>

            {/* ABOUT */}
            <div className="relative pl-6 max-w-3xl">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-[#00F076]/40" />

              <h3 className="text-3xl font-semibold text-gray-100">
                About the Bootcamp
              </h3>

              <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                This bootcamp focuses on real-world robot learning pipelines —
                from imitation learning to transformer-based policies —
                implemented and deployed on physical robots.
              </p>
            </div>
          </div>

          {/* ===== RIGHT PANEL ===== */}
          <div className="lg:col-span-4 space-y-12">

            {/* PRICE */}
            <div className="rounded-3xl bg-gradient-to-br
              from-[#00F076]/10 via-white/5 to-black p-6">

              <p className="text-sm text-gray-400 mb-2">
                One-time enrollment
              </p>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-white">
                  ₹24,999
                </span>
                <span className="text-sm line-through text-gray-400">
                  ₹34,999
                </span>
              </div>

              <button
                className="w-full py-4 rounded-xl font-semibold text-black
                bg-[#00F076] hover:scale-[1.03]
                transition duration-300" 
                onClick={() => navigate("/checkout")}
              >
                Go To Checkout
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                Limited seats • Lifetime access
              </p>
            </div>

            {/* CURRICULUM */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-gray-100">
                  Curriculum
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock size={14} />
                  0 hrs 0 min
                </div>
              </div>

              <div className="space-y-3">
                {curriculum.map((item, i) => {
                  const isOpen = openIndex === i
                  return (
                    <button
                      key={i}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : i)
                      }
                      className={`
                        w-full text-left rounded-xl px-4 py-4
                        border border-white/10
                        transition-all duration-300
                        ${isOpen
                          ? "bg-[#00F076]/10 border-[#00F076]/40"
                          : "bg-white/5 hover:bg-white/10"}
                      `}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-base text-gray-200">
                          {item.title}
                        </p>

                        <ChevronDown
                          size={18}
                          className={`
                            transition-transform duration-300
                            ${isOpen ? "rotate-180 text-[#00F076]" : "text-gray-400"}
                          `}
                        />
                      </div>

                      {isOpen && (
                        <p className="text-sm text-gray-400 mt-3">
                          Lesson content unlocked after enrollment.
                        </p>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* DETAILS */}
            <div className="pt-6 border-t border-white/10
              text-sm text-gray-400 space-y-2">
              <div className="flex justify-between">
                <span>Total Lessons</span>
                <span>22</span>
              </div>
              <div className="flex justify-between">
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
