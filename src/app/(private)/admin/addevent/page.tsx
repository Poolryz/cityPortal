"use client"
import { createEvent } from "@/app/actions/events";

function AddEventPage() {
    return (
        <div>
            <div className="create-event">
                <div className="create-event__title">Добавить новое событие</div>
                <form action={(formData) => {
                    const form = {
                        name: formData.get("name"),
                        date: formData.get("date"),
                        location: formData.get("location"),
                        category: formData.get("category"),
                        time: formData.get("time"),
                    }
                    return createEvent(form)
                }} className="create-event__form flex flex-col gap-4">
                    <label>
                        Название:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Дата:
                        <input type="date" name="date" />
                    </label>
                    <label>
                        Локация:
                        <input type="text" name="location" />
                    </label>
                    <label>
                        Категория:
                        <input type="text" name="category" />
                    </label>
                    <label>
                        Время:
                        <input type="time" name="time" />
                    </label>

                    <button type="submit" className="align-self-start">Добавить</button>
                </form>

            </div>
        </div>
    );
}
export default AddEventPage