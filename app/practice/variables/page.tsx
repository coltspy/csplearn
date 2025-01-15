'use client'


import { ArrowLeft, PlayCircle, Terminal, BookOpen, Code, Bug } from 'lucide-react'
import Link from 'next/link'
import CodeEditor from '@/components/CodeEditor'

export default function VariablesPage() {
  return (
    <div className="max-w-4xl">
      {/* Header with back button */}
      <div className="mb-8">
        <Link 
          href="/practice" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Practice
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Variables Practice</h1>
        <p className="mt-2 text-gray-600">Learn how to store and use data in your apps</p>
      </div>

      {/* Learning Section */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4 flex items-center">
            <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Understanding Variables</h2>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Basic Variable Usage */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Creating Variables</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Simple Variables</h4>
                  <p className="text-sm text-blue-800 mb-2">Store a single value</p>
                  <code className="block bg-white bg-opacity-50 p-2 rounded text-sm">
                    var count = 0; // keeps track of numbers<br/>
                    var userName = "Alex"; // stores text
                  </code>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Lists</h4>
                  <p className="text-sm text-purple-800 mb-2">Store multiple values in one variable</p>
                  <code className="block bg-white bg-opacity-50 p-2 rounded text-sm">
                    var list = []; // empty list to start<br/>
                    var colors = ["red", "blue", "green"]; // list with items
                  </code>
                </div>
              </div>
            </div>

            {/* Variable Tips */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Important Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  Always declare your variables at the top of your code
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  Use clear names that describe what the variable stores
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  Initialize counters and lists before using them
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  Comments help explain what your variables are for
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Challenge 1 */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Challenge 1: Create and Update Variables</h2>
            <p className="mt-2 text-gray-600">Create variables to store a score and increase it</p>
          </div>

          <CodeEditor
            initialCode={`// Create a score variable and set it to 0


// Increase the score by 10


// Print the new score
console.log("Score: ")`}
            height="200px"
          />
        </div>
      </div>

      {/* Practice Challenge 2 */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Challenge 2: Working with Lists</h2>
            <p className="mt-2 text-gray-600">Create a list and add items to it</p>
          </div>

          <CodeEditor
            initialCode={`// Create an empty list called 'items'


// Add three items to your list using appendItem()


// Print your list
console.log("Items in list: ")`}
            height="200px"
          />
        </div>
      </div>

      {/* Debug Challenge */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4 flex items-center">
            <Bug className="h-5 w-5 text-red-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Fix the Code</h2>
          </div>

          <div className="p-4 border-b border-gray-200">
            <p className="text-gray-600">This code has three errors. Can you fix them?</p>
          </div>

          <CodeEditor
            initialCode={`// Fix the errors in this code
score = 10  // Missing var and semicolon

itemList = ["apple", "banana" "orange"]  // Missing comma

appendItem[itemList, "grape"]  // Wrong syntax for appendItem

console.log("Score:", score);
console.log("Items:", itemList);`}
            height="200px"
          />
        </div>
      </div>

      {/* Next Section */}
      <div className="mt-8 border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            Great work with variables! Next, we'll learn about using if statements 
            to make decisions in your code. Ready for conditionals?
          </p>
        </div>
      </div>
    </div>
  )
}