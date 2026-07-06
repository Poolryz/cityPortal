import EventItemUi from "@/ui/EventItemUi/EventItemUi"
import styles from "./styles.module.scss"
import { eventsList } from "@/app/events"
import prisma from "@/lib/prisma"
async function EventsListUi() {
    const eventsData = await prisma.event.findMany()
    console.dir(eventsData)

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