'use client'

import { useRef, useState } from 'react'
import Editor, { OnMount } from '@monaco-editor/react'
import { PlayCircle, Lightbulb, CheckCircle, XCircle } from 'lucide-react'

interface CodeEditorProps {
  initialCode: string;
  hint: string;
  height?: string;
  checkFn: (code: string) => boolean;
}

type MonacoEditorType = {
  getValue: () => string;
  setValue: (value: string) => void;
};

export default function CodeEditor({ 
  initialCode, 
  hint, 
  height = "200px",
  checkFn 
}: CodeEditorProps) {
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const editorRef = useRef<MonacoEditorType | null>(null)

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor as MonacoEditorType
  }

  const checkSolution = () => {
    if (!editorRef.current) return

    const userCode = editorRef.current.getValue()
    
    // Check if code is unchanged
    if (userCode.trim() === initialCode.trim()) {
      setIsCorrect(false)
      return
    }

    setIsCorrect(checkFn(userCode))
  }

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <Editor
        height={height}
        defaultLanguage="javascript"
        defaultValue={initialCode}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
      <div className="bg-white p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={checkSolution}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <PlayCircle className="h-4 w-4 mr-2" />
              Check Solution
            </button>
            <button 
              onClick={() => {
                editorRef.current?.setValue(initialCode)
                setIsCorrect(null)
                setShowHint(false)
              }}
              className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-1"
            >
              <Lightbulb className="h-4 w-4" />
              <span>Need a hint?</span>
            </button>
          </div>
        </div>

        {isCorrect !== null && (
          <div className={`flex items-center space-x-2 p-3 rounded-lg ${
            isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {isCorrect ? (
              <>
                <CheckCircle className="h-5 w-5" />
                <span>Correct! Well done!</span>
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5" />
                <span>Not quite right. Try again!</span>
              </>
            )}
          </div>
        )}

        {showHint && (
          <div className="bg-blue-50 text-blue-700 p-3 rounded-lg flex items-start space-x-2">
            <Lightbulb className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>{hint}</span>
          </div>
        )}
      </div>
    </div>
  )
}