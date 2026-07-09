"use client"

import { deleteEvent } from "@/app/actions/events";

function ButtonDeletteEventComponent({ eventId }: { eventId: number }) {
    async function handleDeleteEvent() {
        await deleteEvent(eventId);
    }

    return (
        <button onClick={handleDeleteEvent}>Удалить</button>
    )
}
export default ButtonDeletteEventComponent