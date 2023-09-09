'use client';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Fonts } from '@/shared/fonts';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'AploCoin',
//   description: '',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><Fonts /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
