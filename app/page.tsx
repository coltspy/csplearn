// app/page.tsx
export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to CS Principles
      </h1>
      
      <p className="text-lg text-gray-600">
        This platform is designed to help you learn computer science fundamentals 
        in a simple and structured way.
      </p>
      
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Start Learning
          </h2>
          <p className="text-gray-600">
            Begin with the fundamentals and progress at your own pace.
          </p>
        </div>
        
        <div className="p-6 bg-green-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Practice
          </h2>
          <p className="text-gray-600">
            Test your knowledge with interactive exercises and challenges.
          </p>
        </div>
      </div>
    </div>
  )
}