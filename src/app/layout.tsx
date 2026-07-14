import '@/app/globals.scss'
import { Golos_Text } from 'next/font/google'
import type { Viewport } from 'next'

export const viewport: Viewport = {
}

const golosText = Golos_Text({
  weight: '400',
})


export const metadata = {

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={golosText.className}>
      <meta name="viewport" content=""></meta>
      <body>
        {children}
      </body>
    </html>
  )
}