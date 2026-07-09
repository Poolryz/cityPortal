import EventItemUi from "@/ui/EventItemUi/EventItemUi"
import styles from "./styles.module.scss"
import { getEvents } from "@/app/actions/events"
async function EventsListUi() {
    const eventsData = await getEvents()
    return (
        <>
            <div className={styles.upcomingEvents__grid}>
                {eventsData.map((event) => {
                    return (
                        <EventItemUi key={event.id} event={event} />
                    )
                })}
            </div>
        </>
    )
}
export default EventsListUi