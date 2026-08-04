"use client"
import { Search } from "lucide-react"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import useStore from "@/store/useStore"
import { usePathname } from "next/navigation"
function SearchPanelUi() {
    const [searchQuery, setSearchQuery] = useState("")

    const addSearch = useStore((state: any) => state.addSearch)
    useEffect(() => {
        addSearch(searchQuery)
    }, [searchQuery])

    const pathname = usePathname()
    const links = [
        { name: 'Поиск мероприятий…', href: '/calendar' },
        { name: 'Поиск мест…', href: '/dostop' },
        { name: 'Поиск организаций…', href: '/company' },
    ]

    const placeholder = links.find(item => { if (item.href == pathname) { return item.name } })?.name
    return (
        <div className={styles.searchPanel}>
            <Search size={16} />
            <input className={styles.searchPanel__input} type="search" placeholder={placeholder} name="" id="" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    )
}
export default SearchPanelUi