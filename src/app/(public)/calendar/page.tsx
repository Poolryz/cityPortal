import styles from "./styles.module.scss"
// import MyDatePickerUi from "@/ui/MyDatePickerUi/MyDatePickerUi"
import FilterUi from "@/ui/FilterUi/FilterUi"
import SearchPanelUi from "@/ui/SearchPanelUi/SearchPanelUi"
import EventsListUi from "@/ui/EventsListUi/EventsListUi"
import TitlePageComponent from "@/components/TitlePageComponent/TitlePageComponent"

export const generateMetadata = () => {
    return {
        title: "Календарь",
        description: "Календарь событий в городе Лысьва"
    }
}



export default function CalendarPage() {
    return (<>
        <TitlePageComponent search={true} />
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