import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide text-blue-400">
            RoboLearn
          </h1>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#courses" className="hover:text-blue-400 transition">
              Courses
            </a>
            <a href="#labs" className="hover:text-blue-400 transition">
              Labs
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>
          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Learn Robotics <br />
              <span className="text-blue-400">From Basics to AI</span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-lg">
              Hands-on robotics learning platform covering electronics,
              programming, sensors, embedded systems, and AI-powered robots.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium">
                Explore Courses
              </button>
              <button className="px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-400 transition font-medium">
                View Projects
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                What You’ll Learn
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• Arduino & Microcontrollers</li>
                <li>• Sensors & Actuators</li>
                <li>• Robot Kinematics</li>
                <li>• ROS Basics</li>
                <li>• AI & Computer Vision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Learning Tracks
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Robotics",
                desc: "Electronics fundamentals, motors, and Arduino programming."
              },
              {
                title: "Intermediate Robotics",
                desc: "Sensors, control systems, and autonomous navigation."
              },
              {
                title: "Advanced Robotics",
                desc: "ROS, AI, machine vision, and real-world robotics projects."
              }
            ].map((course, i) => (
              <div
                key={i}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition"
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-400">
                  {course.title}
                </h4>
                <p className="text-gray-400 text-sm">{course.desc}</p>
                <button className="mt-6 text-sm text-blue-400 hover:underline">
                  View Curriculum →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Hands-on Projects
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Line Following Robot",
              "Obstacle Avoidance Bot",
              "Robotic Arm",
              "AI Face Tracking Robot"
            ].map((project, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-blue-400 transition"
              >
                <p className="font-medium">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Start Your Robotics Journey Today
          </h3>
          <p className="mt-4 text-white/90">
            Learn by building real robots, guided by industry-focused curriculum.
          </p>
          <button className="mt-8 px-8 py-3 rounded-lg bg-gray-950 text-white hover:bg-gray-900 transition font-medium">
            Join Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-950 border-t border-gray-800 py-8"
      >
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RoboLearn. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
