"use client"
import styles from "./styles.module.scss"
import { Clock, MapPin } from "lucide-react";
import { Event } from "@/types/event"
import useStore from "@/store/useStore";

interface EventItemUiProps {
    event: Event
}

function EventItemUi({ event }: EventItemUiProps) {
    const categoryStore = useStore((state: any) => state.category)
    const dateStore = useStore((state: any) => state.date);
    const searchStore = useStore((state: any) => state.search)
    const category = event["category"]
    const categoriesObj: any = {
        "all": "Все",
        "culture": "Культура",
        "sport": "Спорт",
        "festival": "Фестиваль",
        "education": "Образование"
    }
    function formatDate(dateString: string) {
        if (!dateString) {
            return "Дата не указана";
        }

        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const date = new Date(dateString);

        // Проверка, что дата валидная
        if (isNaN(date.getTime())) {
            return "Дата не указана";
        }

        const day = date.getDate();
        const month = months[date.getMonth()];

        return `${day} ${month}`;
    }
    function formatDateToISO(dateString: string) {
        if (!dateString) return ''
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 т.к. месяцы с 0
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    if (searchStore && !event.name.toLowerCase().includes(searchStore.toLowerCase())) {
        return
    }

    const isDateMatch = dateStore ? event.date === formatDateToISO(dateStore) : true
    const isCategoryMatch = categoryStore === "all" || categoryStore === category

    if (!isDateMatch || !isCategoryMatch) {
        return null;
    }

    return (
        <div className={styles.event}>
            <div className={styles.event__header}>
                <div className={styles.event__date}>{formatDate(event.date)}</div>
                <div className={styles.event__info}>
                    <div className={styles.event__name}>{event.name}</div>
                    <ul className={styles.event__categories}>
                        <li className={styles.event__category}>{categoriesObj[category]}</li>
                    </ul>
                </div>

            </div>
            <div className={styles.event__footer}>
                <div className={styles.event__time}>
                    <Clock size={12} />
                    <span className={styles.event__num}>
                        {event.time}
                    </span>
                </div>
                <div className={styles.event__location}>
                    <MapPin size={12} />
                    <span className={styles.event__text}>
                        {event.location}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default EventItemUi