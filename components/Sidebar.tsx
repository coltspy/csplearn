'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Code } from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()
  
  const navItems = [
    {
      title: 'Home',
      href: '/',
      icon: Home
    },
    {
      title: 'Practice',
      href: '/practice',
      icon: Code
    },
    {
      title: 'Learn',
      href: '/learn',
      icon: BookOpen
    }
  ]
  
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800 px-2 mb-8">CS Practice</h1>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium
                transition-colors
                ${pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <item.icon className={`h-5 w-5 flex-shrink-0
                ${pathname === item.href ? 'text-blue-600' : 'text-gray-500'}`} />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar