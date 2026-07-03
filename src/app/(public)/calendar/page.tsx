
import styles from "./styles.module.scss"
import Link from "next/link"
// import MyDatePickerUi from "@/ui/MyDatePickerUi/MyDatePickerUi"
import EventItemUi from "@/ui/EventItemUi/EventItemUi"
import { eventsList } from "./events"
import FilterUi from "@/ui/FilterUi/FilterUi"
import SearchPanelUi from "@/ui/SearchPanelUi/SearchPanelUi"



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
                <div className={styles.upcomingEvents__grid}>
                    {eventsList.map((event) => {
                        return (
                            <EventItemUi key={event.id} event={event} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}