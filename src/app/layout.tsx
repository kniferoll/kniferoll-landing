import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KnifeRoll',
  description: 'Tech by and for chefs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-slate-50 mb-20">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
