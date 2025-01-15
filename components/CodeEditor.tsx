'use client'

import { useRef, useState } from 'react'
import Editor, { OnMount } from '@monaco-editor/react'
import { PlayCircle } from 'lucide-react'

interface CodeEditorProps {
  initialCode: string;
  height?: string;
}

type MonacoEditorType = {
  getValue: () => string;
  setValue: (value: string) => void;
};

export default function CodeEditor({ initialCode, height = "200px" }: CodeEditorProps) {
  const [output, setOutput] = useState<string>("")
  const editorRef = useRef<MonacoEditorType | null>(null)

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor as MonacoEditorType
  }

  const runCode = () => {
    if (!editorRef.current) return

    const code = editorRef.current.getValue()
    
    // Clear previous output
    setOutput("")
    
    try {
      // Create a safe console.log that captures output
      const logs: string[] = []
      const safeConsole = {
        log: (...args: any[]) => {
          logs.push(args.map(arg => String(arg)).join(' '))
        }
      }

      // Create safe environment
      const runSafe = new Function('console', code)
      
      // Run the code with our safe console
      runSafe(safeConsole)
      
      // Display output
      setOutput(logs.join('\n'))
    } catch (err) {
      const error = err as Error
      setOutput(`Error: ${error.message}`)
    }
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
      <div className="bg-white p-4 flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <button
            onClick={runCode}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            <PlayCircle className="h-4 w-4 mr-2" />
            Run Code
          </button>
          <button 
            onClick={() => editorRef.current?.setValue(initialCode)}
            className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
        </div>
        {output && (
          <div className="ml-4 flex-1">
            <h4 className="text-sm font-medium text-gray-900 mb-1">Output:</h4>
            <pre className="text-sm text-gray-600 bg-gray-50 p-2 rounded-lg whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}