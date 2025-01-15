import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CS Practice',
  description: 'Learn and practice computer science concepts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <main className="ml-64">
          <div className="max-w-[2000px] mx-auto p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}