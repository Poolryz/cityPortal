import '@/app/globals.scss'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
      </body>
    </html>
  )
}