import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Layout } from '@/components/Layout'

export const metadata: Metadata = {
  title: 'APIx Language Specification v1.0.0',
  description: 'A Declarative Domain-Specific Language for Backend API Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
