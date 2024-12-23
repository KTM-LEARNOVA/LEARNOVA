'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setCurrentTheme(savedTheme)
    setTheme(savedTheme)
  }, [setTheme])

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">LEARNOVA</Link>
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/testimonials" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Testimonials</Link></li>
              <li><Link href="/payment" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Enroll Now</Link></li>
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

