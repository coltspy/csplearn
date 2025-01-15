import { Code, Puzzle, Zap, Box, List, RotateCw, MoveRight, PlayCircle } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    title: "Variables",
    description: "Learn about storing and managing data",
    icon: Code,
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    href: "/practice/variables"
  },
  {
    title: "Conditionals",
    description: "Master decision-making in code",
    icon: Puzzle,
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    href: "/practice/conditionals"
  },
  {
    title: "Functions",
    description: "Create reusable blocks of code",
    icon: Zap,
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
    href: "/practice/functions"
  },
  {
    title: "Lists",
    description: "Work with collections of data",
    icon: List,
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    href: "/practice/lists"
  },
  {
    title: "Loops",
    description: "Automate repetitive tasks",
    icon: RotateCw,
    bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
    href: "/practice/loops"
  },
  {
    title: "Traversals",
    description: "Navigate through data structures",
    icon: MoveRight,
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    href: "/practice/traversals"
  }
]

export default function PracticePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Practice</h1>

      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => (
          <div 
            key={category.title} 
            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            <div className={`h-full flex flex-col ${category.bgColor} p-6`}>
              <div className="flex items-center space-x-4 mb-3">
                <div className="p-2 bg-white bg-opacity-50 rounded-lg">
                  <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
              </div>
              <p className="text-sm text-gray-600 flex-grow">{category.description}</p>
              
              <Link
                href={category.href}
                className="mt-4 inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 group-hover:translate-x-1 transition-all duration-200"
              >
                <span className="mr-2">Start Practice</span>
                <PlayCircle className="h-4 w-4 transform group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}