'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-500">
              SPINX
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#xoffice" className="text-gray-700 hover:text-blue-500 transition-colors">
              xoffice
            </a>
            <a href="#xconnector" className="text-gray-700 hover:text-blue-500 transition-colors">
              xconnector
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-500 transition-colors">
              주요 기능
            </a>
            <a href="#integration" className="text-gray-700 hover:text-blue-500 transition-colors">
              통합 연동
            </a>
            <a href="#usecases" className="text-gray-700 hover:text-blue-500 transition-colors">
              사용 사례
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors">
              가격
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              시작하기
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#xoffice" className="text-gray-700 hover:text-blue-500 transition-colors">
                xoffice
              </a>
              <a href="#xconnector" className="text-gray-700 hover:text-blue-500 transition-colors">
                xconnector
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-500 transition-colors">
                주요 기능
              </a>
              <a href="#integration" className="text-gray-700 hover:text-blue-500 transition-colors">
                통합 연동
              </a>
              <a href="#usecases" className="text-gray-700 hover:text-blue-500 transition-colors">
                사용 사례
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-500 transition-colors">
                가격
              </a>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                시작하기
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

