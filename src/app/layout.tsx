import '@/app/globals.scss'
import { Golos_Text } from 'next/font/google'
import type { Viewport } from 'next'
import { ReactNode } from 'react'

export const viewport: Viewport = {
}

const golosText = Golos_Text({
  weight: '400',
})


export const metadata = {

}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={golosText.className}>
      <meta name="viewport" content=""></meta>
      <body>
        {children}
      </body>
    </html>
  )
}