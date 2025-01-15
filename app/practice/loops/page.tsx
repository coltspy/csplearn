'use client'

import { ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import CodeEditor from '@/components/CodeEditor'
import { challenges } from './solutions'

export default function LoopsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Loops Practice</h1>
        <p className="mt-2 text-gray-600">Learn how to repeat actions in your code</p>
      </div>

      {/* Understanding Loops Section */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Understanding Loops</h2>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Loops help you repeat actions without writing the same code over and over again. 
              Think of a loop like giving instructions: "Do this 5 times" instead of writing the same instruction 5 times.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-blue-900 mb-2">Basic Loop Structure</h3>
              <p className="text-sm text-blue-800 mb-4">
                A for loop has three parts:
                <br/>• Starting point: var i = 0
                <br/>• How long to run: i {'<'} 5
                <br/>• How to count: i++
              </p>
              <code className="block bg-white bg-opacity-50 p-3 rounded text-sm text-blue-800 whitespace-pre">
{`// This loop runs 5 times (0, 1, 2, 3, 4)
for (var i = 0; i < 5; i++) {
    console.log("Loop number: " + i);
}`}</code>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-purple-900 mb-2">Example: Updating Multiple Elements</h3>
              <code className="block bg-white bg-opacity-50 p-3 rounded text-sm text-purple-800 whitespace-pre">
{`// Change the color of 5 text boxes at once
for (var i = 0; i < 5; i++) {
    setProperty("text" + i, "text-color", "blue");
}`}</code>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-2">Common Loop Patterns</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-green-800 mb-2">1. Counting Up:</p>
                  <code className="block bg-white bg-opacity-50 p-2 rounded text-sm text-green-800 whitespace-pre">
{`for (var i = 1; i <= 5; i++) {  // 1 to 5
    console.log(i);
}`}</code>
                </div>
                <div>
                  <p className="text-sm text-green-800 mb-2">2. Using the Counter:</p>
                  <code className="block bg-white bg-opacity-50 p-2 rounded text-sm text-green-800 whitespace-pre">
{`for (var i = 0; i < 3; i++) {
    setProperty("label" + i, "text", "Label " + i);
}`}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loop Counter Tips */}
      <div className="mb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Understanding the Loop Counter (i)</h2>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              The loop counter (usually called 'i') helps keep track of how many times the loop has run. 
              You can use this counter in your code inside the loop.
            </p>

            <div className="bg-rose-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-rose-900 mb-2">How the Counter Changes</h3>
              <code className="block bg-white bg-opacity-50 p-3 rounded text-sm text-rose-800 whitespace-pre">
{`// If we write: for (var i = 0; i < 3; i++)
// First time: i is 0
// Second time: i is 1
// Third time: i is 2
// Then the loop stops because i becomes 3`}</code>
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
    </div>
  )
}