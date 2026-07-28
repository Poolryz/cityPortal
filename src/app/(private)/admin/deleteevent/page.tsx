import { getEvents } from "@/app/actions/events";
import ButtonDeletteEventComponent from "@/components/ButtonDeletteEventComponent/ButtonDeletteEventComponent";
import checkAuth from "@/app/actions/auth";

async function DeleteEventPage() {

    await checkAuth()

    const events = await getEvents()
    return (
        <div className="delete-event">
            <div className="delete-event__title">Удалить событие</div>
            <ul>
                {events.map((item) => {
                    return (
                        <li key={item.id} className="max-w-[520px]">
                            <div>{item.name}</div>
                            <ButtonDeletteEventComponent eventId={item.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default DeleteEventPage;