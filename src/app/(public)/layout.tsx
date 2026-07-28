import '@/app/globals.scss'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent'
import { ReactNode } from 'react'
export const metadata = {

}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (<>
    <HeaderComponent />
    <main className='_container'>
      {children}
    </main>
  </>
  )
}