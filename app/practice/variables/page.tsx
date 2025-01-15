'use client'

import { ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import CodeEditor from '@/components/CodeEditor'
import { challenges } from './solutions'

export default function VariablesPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
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

      {/* Variables Learning Section */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Understanding Variables</h2>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Variables are like containers that can store different types of information in your program. 
              Think of them as labeled boxes where you can put things and change them later.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-blue-900 mb-2">Example: Score in a Game</h3>
              <code className="block bg-white bg-opacity-50 p-3 rounded text-sm text-blue-800">
                var score = 0;           // Create a score starting at 0<br/>
                score = 10;              // Change score to 10<br/>
                score = score + 5;       // Add 5 more points<br/>
                console.log(score);      // Shows: 15
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* First Challenge */}
      <div className="mb-16">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Challenge 1: {challenges[0].title}</h2>
            <p className="mt-2 text-gray-600">{challenges[0].description}</p>
          </div>

          <CodeEditor
            initialCode={challenges[0].initialCode}
            checkFn={challenges[0].checkFn}
            hint={challenges[0].hint}
            height="200px"
          />
        </div>
      </div>

      {/* Lists Learning Section */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Working with Lists</h2>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Lists are special variables that can store multiple items. Think of a list like a shopping list 
              where you can keep adding more items to the end.
            </p>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-purple-900 mb-2">The appendItem Function</h3>
              <p className="text-sm text-purple-800 mb-4">
                To add items to a list, we use appendItem(list, item). Important: appendItem adds ONE item at a time!
                <br/>• list: the list you want to add to
                <br/>• item: what you want to add (one item only)
              </p>
              <div className="bg-white bg-opacity-50 p-3 rounded text-sm text-purple-800 space-y-2">
                <div className="text-green-700">✓ Correct way (adding items one at a time):</div>
                <code>
                  var fruits = [];<br/>
                  appendItem(fruits, "apple");<br/>
                  appendItem(fruits, "banana");<br/>
                  appendItem(fruits, "orange");
                </code>
                
                <div className="text-red-700 mt-4">✗ Incorrect way (trying to add multiple items at once):</div>
                <code>
                  var fruits = [];<br/>
                  appendItem(fruits, "apple", "banana", "orange");  // This won't work!
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Challenge */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Challenge 2: {challenges[1].title}</h2>
            <p className="mt-2 text-gray-600">{challenges[1].description}</p>
          </div>

          <CodeEditor
            initialCode={challenges[1].initialCode}
            checkFn={challenges[1].checkFn}
            hint={challenges[1].hint}
            height="200px"
          />
        </div>
      </div>
    </div>
  )
}