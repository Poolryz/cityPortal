import { getEvents } from "@/app/actions/events";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function editEvent() {

    const session = await auth();

    if (!session) {
        return redirect("/signin");
    }

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