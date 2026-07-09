'use server'

import prisma from "@/lib/prisma";

export async function getEvents() {
    try {
        if (!prisma) {
            throw new Error('Prisma client not initialized');
        }
        return await prisma.event.findMany();
    } catch (error) {
        console.error('Error in getEvents:', error);
        throw new Error('Failed to fetch events');
    }
}

export async function createEvent(data: {
    name: string;
    date: string;
    location: string;
    category: string;
    time: string;
}) {
    try {
        if (!prisma) {
            throw new Error('Prisma client not initialized');
        }

        // Проверяем, что дата в правильном формате
        const eventDate = new Date(data.date);
        if (isNaN(eventDate.getTime())) {
            throw new Error('Invalid date format');
        }

        return await prisma.event.create({
            data: {
                name: data.name,
                date: eventDate.toISOString().split('T')[0], // YYYY-MM-DD
                location: data.location,
                category: data.category,
                time: data.time
            }
        });
    } catch (error) {
        console.error('Error in createEvent:', error);
        throw new Error('Failed to create event');
    }
}

export async function deleteEvent(id: number) {
    try {
        if (!prisma) {
            throw new Error('Prisma client not initialized');
        }

        await prisma.event.delete({
            where: { id },
        });
    } catch (error) {
        console.error('Error in deleteEvent:', error);
        throw new Error('Failed to delete event');
    }
}