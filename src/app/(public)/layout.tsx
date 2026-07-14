import '@/app/globals.scss'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent'
export const metadata = {

}

export default function RootLayout({ children }) {
  return (<>
    <HeaderComponent />
    <main className='_container'>
      {children}
    </main>
  </>
  )
}