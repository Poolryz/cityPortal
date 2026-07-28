"use server"

import { revalidatePath } from "next/cache"
import { createEvent } from "./events";



export async function createEventAction(formData: FormData) {
    const data = {
        name: formData.get("name") as string,
        date: formData.get("date") as string,
        location: formData.get("location") as string,
        category: formData.get("category") as string,
        time: formData.get("time") as string,
    }

    createEvent(data)




    revalidatePath('/');
    return {
        error: null,
        success: true,
    }
}