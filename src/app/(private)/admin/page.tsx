"use client"
import { useState } from "react";
import { createEvent, getEvents } from "@/app/actions/events";

function AdminPage() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    async function handleClick() {
        setLoading(true);
        try {
            const data = await getEvents();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    }
    async function clickAddEvent() {
        try {
            await createEvent({
                name: 'test',
                date: "2026-07-12",
                location: "test location",
                category: "test category",
                time: "test time"
            });
            alert('Event created successfully!');
            // Обновляем список после создания
            await handleClick();
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Error creating event');
        }
    }

    return (
        <nav>
            <button onClick={handleClick} disabled={loading}>
                {loading ? 'Загрузка...' : 'Запрос всех мероприятий'}
            </button>
            <button onClick={clickAddEvent}>создание евента</button>
            {events.map((event, index) => {
                return (
                    <div key={index}>{event.name}</div>
                )
            })}
        </nav>
    )
}

export default AdminPage;