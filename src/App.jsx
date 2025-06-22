import { useState, useEffect } from 'react'
import {
  ChatBubbleLeftRightIcon,
  PlayIcon,
  UserGroupIcon,
  SparklesIcon,
  BoltIcon,
  StarIcon
} from '@heroicons/react/24/outline'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 p-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <BoltIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-purple-800">
              Voltune
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 animate-float">
              <SparklesIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-purple-800 leading-tight">
              Voltune
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-purple-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A powerful Discord bot designed to enhance your server with advanced features and seamless functionality
          </p>
        </div>

        {/* Social Links */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <a
            href="https://discord.gg/k35P8yvTnE"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple-50 border-2 border-purple-200 rounded-2xl text-purple-700 font-semibold transition-all duration-300 hover:bg-purple-100 hover:border-purple-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <ChatBubbleLeftRightIcon className="w-6 h-6" />
              Join Discord
            </span>
          </a>

          <a
            href="https://x.com/VoltuneBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple-50 border-2 border-purple-200 rounded-2xl text-purple-700 font-semibold transition-all duration-300 hover:bg-purple-100 hover:border-purple-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <StarIcon className="w-6 h-6" />
              Follow on X
            </span>
          </a>

          <a
            href="https://youtube.com/@VoltuneBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple-50 border-2 border-purple-200 rounded-2xl text-purple-700 font-semibold transition-all duration-300 hover:bg-purple-100 hover:border-purple-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <PlayIcon className="w-6 h-6" />
              Watch on YouTube
            </span>
          </a>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-300 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-indigo-300 rounded-full animate-float animation-delay-2000 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-4000 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-purple-200 rounded-full animate-float animation-delay-1000 opacity-40"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-5 opacity-30">
          <UserGroupIcon className="w-8 h-8 text-purple-400 animate-pulse-slow" />
        </div>
        <div className="absolute top-3/4 right-10 opacity-30">
          <BoltIcon className="w-6 h-6 text-indigo-400 animate-pulse-slow animation-delay-2000" />
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 p-6 text-center transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <p className="text-purple-500 text-sm">
            © 2024 Voltune. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
