// store/useStore.js
import { create } from 'zustand'
import { Event } from '../types/event'

interface User {
    id: string
    name: string
    email: string
}

const useStore = create((set) => ({
    // Состояние
    isLoading: false,
    events: [],
    category: "",

    // Действия (actions)
    addEvents: (event: Event) => set((state: { events: any }) => ({
        events: [...state.events, event]
    })),

    addCategory: (category: string) => set((state: { category: string }) => ({ category })),

    // Асинхронное действие
    //   fetchUser: async (id) => {
    //     set({ isLoading: true })
    //     try {
    //       const response = await fetch(`/api/users/${id}`)
    //       const user = await response.json()
    //       set({ user, isLoading: false })
    //     } catch (error) {
    //       set({ isLoading: false })
    //       console.error(error)
    //     }
    //   },

    // Геттер (вычисляемое значение)
    // get totalEvents() {
    //     return get().events.length
    // }
}))

export default useStore