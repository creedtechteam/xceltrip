import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XCELTRIP',
  description: 'Created by XCELTRIP Trip',
  generator: 'XCELTRIP',
 icons: {
    icon: "/favicon.png", // this line sets the favicon
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
