import { getEvents } from "@/app/actions/events";
import ButtonDeletteEventComponent from "@/components/ButtonDeletteEventComponent/ButtonDeletteEventComponent";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function DeleteEventPage() {

    const session = await auth();

    if (!session) {
        return redirect("/signin");
    }

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