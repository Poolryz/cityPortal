import { getEvents } from "@/app/actions/events";
import ButtonDeletteEventComponent from "@/components/ButtonDeletteEventComponent/ButtonDeletteEventComponent";
import prisma from "@/lib/prisma";
import EventItemUi from "@/ui/EventItemUi/EventItemUi";
import EventsListUi from "@/ui/EventsListUi/EventsListUi";

async function DeleteEventPage() {
    const events = await getEvents()
    return (
        <div className="delete-event">
            <div className="delete-event__title">Удалить событие</div>
            <ul>
                {events && events.map(event => (
                    <li key={event.id} className="max-w-[520px]">
                        <EventItemUi event={event} />
                        <ButtonDeletteEventComponent eventId={event.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DeleteEventPage;