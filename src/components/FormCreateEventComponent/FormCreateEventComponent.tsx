"use client"

import { createEventAction } from "@/app/actions/form"
import { useActionState } from "react"

type FormState = {
    error: string | null
    success: boolean
}

// Начальное состояние
const initialState: FormState = {
    error: null,
    success: false
}



function FormCreateEventComponent() {
    const [state, formAction, isPending] = useActionState<FormState, FormData>(
        async (prevState: FormState, formData: FormData) => {
            const result = await createEventAction(formData)
            return result
        },
        initialState
    )
    return (
        <form action={formAction}>
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

            <button type="submit" disabled={isPending} className="align-self-start">{isPending ? 'Добавление...' : 'Добавить'}</button>
            {state.error && (
                <p style={{ color: 'red', marginTop: '10px' }}>
                    ❌ {state.error}
                </p>
            )}
        </form>
    )
}
export default FormCreateEventComponent