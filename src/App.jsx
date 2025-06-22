import { useState, useEffect } from 'react'
import {
  ChatBubbleLeftRightIcon,
  PlayIcon,
  UserGroupIcon,
  BoltIcon,
  StarIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    setIsVisible(true)
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-100 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-50 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 p-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="Voltune Logo"
              className="w-8 h-8 rounded-full object-cover border-2 border-purple-500"
            />
            <span className="text-2xl font-bold text-purple-800 dark:text-purple-200">
              Voltune
            </span>
          </div>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center mb-8">
            <img
              src="/image.png"
              alt="Voltune Logo"
              className="w-20 h-20 mr-6 animate-float rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
            <h1 className="text-6xl md:text-8xl font-bold text-purple-800 dark:text-purple-200 leading-tight">
              Voltune
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-purple-600 dark:text-purple-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            A powerful Discord bot designed to enhance your server with advanced features and seamless functionality
          </p>
          <p className="text-lg text-purple-500 dark:text-purple-400 mb-12 max-w-2xl mx-auto">
            Currently in early development - Follow our socials to stay updated on our progress!
          </p>
        </div>

        {/* Social Links */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <a
            href="https://discord.gg/k35P8yvTnE"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple-50 dark:bg-purple-900 border-2 border-purple-200 dark:border-purple-700 rounded-2xl text-purple-700 dark:text-purple-200 font-semibold transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <ChatBubbleLeftRightIcon className="w-6 h-6" />
              Join Our Discord
            </span>
          </a>

          <a
            href="https://x.com/VoltuneBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple-50 dark:bg-purple-900 border-2 border-purple-200 dark:border-purple-700 rounded-2xl text-purple-700 dark:text-purple-200 font-semibold transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <StarIcon className="w-6 h-6" />
              Follow Us on X
            </span>
          </a>

          <a
            href="https://youtube.com/@VoltuneBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple-50 dark:bg-purple-900 border-2 border-purple-200 dark:border-purple-700 rounded-2xl text-purple-700 dark:text-purple-200 font-semibold transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <PlayIcon className="w-6 h-6" />
              Subscribe on YouTube
            </span>
          </a>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-300 dark:bg-purple-600 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-indigo-300 dark:bg-indigo-600 rounded-full animate-float animation-delay-2000 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 dark:bg-purple-500 rounded-full animate-float animation-delay-4000 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-purple-200 dark:bg-purple-700 rounded-full animate-float animation-delay-1000 opacity-40"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-5 opacity-30">
          <UserGroupIcon className="w-8 h-8 text-purple-400 dark:text-purple-500 animate-pulse-slow" />
        </div>
        <div className="absolute top-3/4 right-10 opacity-30">
          <BoltIcon className="w-6 h-6 text-indigo-400 dark:text-indigo-500 animate-pulse-slow animation-delay-2000" />
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 p-6 text-center transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <p className="text-purple-500 dark:text-purple-400 text-sm">
            © 2025 Voltune. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
