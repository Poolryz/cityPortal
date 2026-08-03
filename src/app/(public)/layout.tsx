import '@/app/globals.scss'
import AsideComponent from '@/components/AsideComponent/AsideComponent'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent'
import { ReactNode } from 'react'
export const metadata = {

}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className='_container'>
        <div className='flex gap-4'>
          <AsideComponent />
          {children}
        </div>
      </main>
    </>
  )
}