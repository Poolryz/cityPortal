import { Calendar, Clock, MapPinIcon, MoveRight } from "lucide-react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { getEvents } from "@/app/actions/events";
async function EventHeroComponent() {
    const events = await getEvents()


    const dataActual = new Date().toISOString().split('T')[0]
    const dateActualMs = new Date(dataActual).getTime()

    const eventsActual = events.filter((item) => {
        const dateStoreDate = new Date(item.date)
        const dateStoreDateMs = dateStoreDate.getTime()
        return dateStoreDateMs >= dateActualMs
    })
    const eventsActualSort = eventsActual.sort((a, b) => {
        const dateStoreDateA = new Date(a.date)
        const dateStoreDateB = new Date(b.date)
        const dateStoreDateMsA = dateStoreDateA.getTime()
        const dateStoreDateMsB = dateStoreDateB.getTime()

        return dateStoreDateMsA - dateStoreDateMsB
    })
    const FirstFiveEventsActualSort = eventsActualSort.slice(0, 5)

    const categoriesObj: any = {
        "all": "Все",
        "culture": "Культура",
        "sport": "Спорт",
        "festival": "Фестиваль",
        "education": "Образование"
    }
    function formatDate(dateString: string) {

        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const date = new Date(dateString);


        const day: number = date.getDate();
        const month: string = months[date.getMonth()];
        const dateReturn = { day: day, month: month };

        return dateReturn;
    }

    return (
        <div className={styles["event-hero"]}>
            <div className={styles["event-hero__body"]}>
                <div className={styles["event-hero__header"]}>
                    <h3 className={styles["event-hero__title"]}>Ближайшие события</h3>
                    <Link href={"/calendar"} className={styles["event-hero__link"]}>Все события <MoveRight /></Link>
                </div>
                <ul className={styles["event-hero__list"]}>
                    {FirstFiveEventsActualSort.map((item) => {
                        const dateStoreDate = new Date(item.date)
                        const dateStoreDateMs = dateStoreDate.getTime()
                        if (dateStoreDateMs < dateActualMs) {
                            return;
                        }
                        return (
                            <li key={item.id} className={styles["event-hero__item"]}>
                                <div className={styles["event-hero__date"]}><div className={styles["event-hero__number"]}>{formatDate(item.date).day}</div><div className={styles["event-hero__month"]}>{formatDate(item.date).month}</div> </div>
                                <div className={styles["event-hero__info"]}>
                                    <div className={styles["event-hero__name"]}>{item.name}</div>
                                    <div className={styles["event-hero__location"]}>
                                        <Clock size={12} /><span className={styles["event-hero__time"]}>Время: {item.time}</span><MapPinIcon size={12} /><span className={styles["event-hero__place"]}> {item.location}</span>
                                    </div>
                                </div>
                                <div className={styles["event-hero__category"]}>
                                    {categoriesObj[item.category]}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <Link href={"/calendar"} className={styles["event-hero__button"]}><Calendar />Смотреть календарь событий</Link>
            </div>
        </div>
    )
}
export default EventHeroComponent