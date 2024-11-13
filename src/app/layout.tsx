import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KizenCloud',
  description: 'لإدارة وتشغيل المجمعات الطبية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}