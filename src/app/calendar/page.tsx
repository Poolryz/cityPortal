import { Calendar, ChevronDown, Clock, MapPin, Search } from "lucide-react"
import styles from "./styles.module.scss"
import Link from "next/link"
import MyDatePickerUi from "@/ui/MyDatePickerUi/MyDatePickerUi"
import EventItemUi from "@/ui/MyDatePickerUi/EventItemUi/EventItemUi"
import eventsList from "./events"

export const generateMetadata = () => {
    return {
        title: "Календарь",
        description: "Календарь событий в городе Лысьва"
    }
}

export default function CalendarPage() {
    return (
        <>
            <div className={styles.titlePanel}>
                <h1 className={styles.titlePanel__title}>Календарь мероприятий</h1>
                <div className={styles.searchPanel}>
                    <Search size={16} />
                    <input className={styles.searchPanel__input} type="text" placeholder="Поиск мероприятий" name="" id="" />
                </div>
            </div>
            <div className={styles.filter}>
                <div className={styles.filter__block}>
                    <label className={styles.filter__title}>Фильтр</label>
                    <ul className={styles.filter__list}>
                        <li className={styles.filter__item}>
                            <Link href="#" className={styles.filter__link}>Все</Link>
                        </li>
                        <li className={styles.filter__item}>
                            <Link href="#" className={styles.filter__link}>Все</Link>
                        </li>
                        <li className={styles.filter__item}>
                            <Link href="#" className={styles.filter__link}>Культура</Link>
                        </li>
                        <li className={styles.filter__item}>
                            <Link href="#" className={styles.filter__link}>Спорт</Link>
                        </li>
                        <li className={styles.filter__item}>
                            <Link href="#" className={styles.filter__link}>Фестивали</Link>
                        </li>
                        <li className={styles.filter__item}>
                            <Link href="#" className={styles.filter__link}>Оброзование</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.calendarInput}>
                    <Calendar />
                    <div className={styles.calendarInput__title}>Июль 2025</div>
                    <ChevronDown />
                </div>


                {/* <MyDatePicker /> */}
            </div>
            <div className={styles.upcomingEvents}>
                <h3 className={styles.upcomingEvents__title}>
                    Предстоящие события
                </h3>
                <div className={styles.upcomingEvents__grid}>
                    {eventsList.map((event) => {
                        return (
                            <EventItemUi key={event.id} event={event} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}