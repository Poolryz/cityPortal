'use server'

import prisma from "@/lib/prisma";

// ✅ Добавляем таймауты и лимиты для защиты от больших запросов
export async function getEvents(limit?: number) {
    try {
        if (!prisma) {
            throw new Error('Prisma client not initialized');
        }

        // ✅ Всегда ограничиваем количество записей
        return await prisma.event.findMany({
            take: limit || 1000, // Максимум 1000 записей по умолчанию
            orderBy: {
                date: 'asc' // Сортировка для стабильности
            }
        });
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

        const eventDate = new Date(data.date);
        if (isNaN(eventDate.getTime())) {
            throw new Error('Invalid date format');
        }

        // ✅ Валидация длины строк чтобы не было огромных полей
        if (data.name.length > 255 || data.location.length > 255) {
            throw new Error('Fields too long');
        }

        return await prisma.event.create({
            data: {
                name: data.name.trim().slice(0, 255),
                date: eventDate.toISOString().split('T')[0],
                location: data.location.trim().slice(0, 255),
                category: data.category.trim().slice(0, 100),
                time: data.time.trim().slice(0, 20)
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
export async function getEventById(id: string) {
    try {
        if (!prisma) {
            throw new Error('Prisma client not initialized');
        }

        return await prisma.event.findUnique({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        console.error('Error in getEventById:', error);
        throw new Error('Failed to fetch event');
    }
}
export async function updateEvent(id: number, data: {
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
        if (!id || isNaN(Number(id))) {
            console.error('❌ Invalid ID:', id);
            throw new Error('Invalid event ID');
        }

        const eventDate = new Date(data.date)

        const updateData = {
            name: data.name.trim().slice(0, 255),
            date: eventDate.toISOString().split('T')[0],
            location: data.location?.trim()?.slice(0, 255) || '',
            category: data.category?.trim()?.slice(0, 100) || '',
            time: data.time?.trim()?.slice(0, 20) || ''
        };
        const result = await prisma.event.update({
            where: { id: Number(id) },
            data: updateData
        });

        return result;
    } catch (error) {
        console.error('Error in updateEvent:', error);
        throw new Error('Failed to update event');
    }
}