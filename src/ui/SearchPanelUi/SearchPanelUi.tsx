"use client"
import { Search } from "lucide-react"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import useStore from "@/store/useStore"
function SearchPanelUi() {
    const [searchQuery, setSearchQuery] = useState("")

    const addSearch = useStore((state: any) => state.addSearch)
    useEffect(() => {
        addSearch(searchQuery)
    }, [searchQuery])
    return (
        <div className={styles.searchPanel}>
            <Search size={16} />
            <input className={styles.searchPanel__input} type="search" placeholder="Поиск мероприятий" name="" id="" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    )
}
export default SearchPanelUi