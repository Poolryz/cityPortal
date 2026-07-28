import checkAuth from "@/app/actions/auth";
import { getEvents } from "@/app/actions/events";
import Link from "next/link";

async function editEvent() {
    await checkAuth()
    const events = await getEvents()
    return (
        <div className="flex flex-col gap-2">
            {events.map((item) => {
                return (
                    <Link href={`/admin/editevent/${item.id}`} key={item.id}>{item.name}</Link >
                )
            })}
        </div>
    )
}
export default editEvent;