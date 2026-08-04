import '@/app/globals.scss'
import AsideComponent from '@/components/AsideComponent/AsideComponent'
import TitlePageComponent from '@/components/TitlePageComponent/TitlePageComponent'
import { ReactNode } from 'react'
export const metadata = {

}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className='_container'>
        <div className='content'>
          <AsideComponent />
          <div className="wrapper">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}