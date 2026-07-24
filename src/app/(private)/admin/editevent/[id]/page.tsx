import { getEventById, updateEvent } from "@/app/actions/events";

async function editEventId({ params }: { id: string }) {
    const { id } = await params
    const event = await getEventById(id)


    return (
        <>
            <form action={async (formData) => {
                'use server'
                const form = {
                    name: formData.get("name") as string,
                    date: formData.get("date") as string,
                    location: formData.get("location") as string,
                    category: formData.get("category") as string,
                    time: formData.get("time") as string,
                };
                console.log(form);
                await updateEvent(id, form)
            }} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    defaultValue={event?.name || ''}
                />
                <input
                    type="text"
                    name="location"
                    defaultValue={event?.location || ''}
                />
                <input
                    type="text"
                    name="category"
                    defaultValue={event?.category || ''}
                />
                <input
                    type="date"
                    name="date"
                    defaultValue={event?.date || ''}
                />
                <input
                    type="time"
                    name="time"
                    defaultValue={event?.time || ''}
                />
                <button type="submit">Обновить</button>
            </form>
        </>
    )
}
export default editEventId;