import { getEvents } from "@/app/actions/events";
import Link from "next/link";

async function editEvent() {

    const events = await getEvents()


    return (
        <>
            {events.map((item) => {
                return (
                    <Link href={`/admin/editevent/${item.id}`} key={item.id}>{item.name}</Link >
                )
            })}
        </>
    )
}
export default editEvent;