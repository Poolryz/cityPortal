import { Search } from "lucide-react"
import styles from "./styles.module.scss"

export const generateMetadata = () => {
    return {
        title: "Календарь",
        description: "Календарь событий в городе Лысьва"
    }
}

export default function CalendarPage() {
    return (
        <>
            <div className={styles.titlePanel}>
                <h1 className={styles.titlePanel__title}>Календарь мероприятий</h1>
                <div className={styles.searchPanel}>
                    <Search size={16} />
                    <input className={styles.searchPanel__input} type="text" placeholder="Поиск мероприятий" name="" id="" />
                </div>
            </div>
        </>
    )
}