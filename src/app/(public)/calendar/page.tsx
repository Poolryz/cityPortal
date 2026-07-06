import styles from "./styles.module.scss"
// import MyDatePickerUi from "@/ui/MyDatePickerUi/MyDatePickerUi"
import FilterUi from "@/ui/FilterUi/FilterUi"
import SearchPanelUi from "@/ui/SearchPanelUi/SearchPanelUi"
import EventsListUi from "@/ui/EventsListUi/EventsListUi"

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
                <SearchPanelUi />
            </div>
            <FilterUi />
            <div className={styles.upcomingEvents}>
                <h3 className={styles.upcomingEvents__title}>
                    Предстоящие события
                </h3>
                <EventsListUi />
            </div>
        </>
    )
}