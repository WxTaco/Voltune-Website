import { useState, useEffect } from 'react'
import {
  ChatBubbleLeftRightIcon,
  PlayIcon,
  StarIcon,
  SunIcon,
  MoonIcon,
  InformationCircleIcon,
  HeartIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showInfoModal, setShowInfoModal] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showInfoModal) {
        setShowInfoModal(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [showInfoModal])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-indigo-50/30 dark:from-purple-950/20 dark:via-transparent dark:to-indigo-950/20"></div>

      <nav className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="Voltune Logo"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              Voltune
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/image.png"
              alt="Voltune Logo"
              className="w-24 h-24 mx-auto mb-6 rounded-2xl object-cover shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Voltune
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
              The all-in-one Discord bot for modern servers
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Currently in development. Join our community to follow progress and get early access.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://discord.gg/k35P8yvTnE"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 hover:bg-white dark:hover:bg-gray-800 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Discord</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://x.com/VoltuneBot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 hover:bg-white dark:hover:bg-gray-800 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              <StarIcon className="w-5 h-5" />
              <span>X (Twitter)</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.youtube.com/@voltunecordbot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 hover:bg-white dark:hover:bg-gray-800 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              <PlayIcon className="w-5 h-5" />
              <span>YouTube</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setShowInfoModal(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <InformationCircleIcon className="w-5 h-5" />
              <span>About Voltune</span>
            </button>

            <a
              href="https://ko-fi.com/voltunebot"
              target="_blank"
              rel="noopener noreferrer"
              className="support-button group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <HeartIcon className="w-5 h-5" />
              <span>Support Us</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Voltune. All rights reserved.
          </p>
        </div>
      </footer>

      {showInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                About Voltune
              </h2>
              <button
                onClick={() => setShowInfoModal(false)}
                className="p-2 rounded-xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Currently in Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Voltune is an all-in-one Discord bot designed to simplify server management while offering powerful features in one package.
                </p>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  We're actively developing Voltune to include tools for moderation, tickets, leveling, giveaways, a web dashboard, and much more — all with a focus on ease of use and flexibility.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What you can expect:
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    Regular updates and new features
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    A modern, user-friendly dashboard
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    Both free and premium plans
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    Community-driven development
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  Want to be part of the process? Join our Discord server to follow progress, test early features, and share your feedback.
                </p>
                <a
                  href="https://dsc.gg/voltune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors duration-200 font-medium"
                >
                  <ChatBubbleLeftRightIcon className="w-4 h-4" />
                  Join our Discord
                </a>
              </div>

              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  Voltune is coming soon — stay tuned.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Credits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500 dark:text-gray-400">Founder:</span>
                    <span className="text-gray-900 dark:text-white font-medium">OneTech</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500 dark:text-gray-400">Head Developer:</span>
                    <span className="text-gray-900 dark:text-white font-medium">Taco</span>
                  </div>
                  <div className="flex justify-between py-1">
                   
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500 dark:text-gray-400">Animator:</span>
                    <span className="text-gray-900 dark:text-white font-medium">figuate</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500 dark:text-gray-400">Designer:</span>
                    <span className="text-gray-900 dark:text-white font-medium">Kydesh & saoydev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
