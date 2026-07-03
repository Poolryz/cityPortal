import HeaderComponent from "@/components/HeaderComponent/HeaderComponent"

export const metadata = {
}

export default function PublicLayout({ children }) {
    return (
        <>
            <HeaderComponent />
            <main className='_container'>
                {children}
            </main>
            <footer></footer>
        </>
    )
}