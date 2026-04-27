'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="relative flex h-9 w-[7.5rem] items-center">
              <Image
                src="/images/xoffice-logo.png"
                alt="xOffice"
                width={160}
                height={40}
                className="h-full w-full object-contain object-left"
                priority
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#xoffice" className="text-gray-700 hover:text-blue-500 transition-colors">
              xOffice
            </a>
            <a href="#xconnector" className="text-gray-700 hover:text-blue-500 transition-colors">
              xConnector
            </a>
            <a href="#usecases" className="text-gray-700 hover:text-blue-500 transition-colors">
              사용 사례
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-block"
            >
              문의
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#xoffice" className="text-gray-700 hover:text-blue-500 transition-colors">
                xOffice
              </a>
              <a href="#xconnector" className="text-gray-700 hover:text-blue-500 transition-colors">
                xConnector
              </a>
              <a href="#usecases" className="text-gray-700 hover:text-blue-500 transition-colors">
                사용 사례
              </a>
              <a
                href="#contact"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                문의
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
