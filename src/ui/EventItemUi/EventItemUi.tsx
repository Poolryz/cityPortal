import styles from "./styles.module.scss"
import { Clock, MapPin } from "lucide-react";
import { Event } from "@/types/event"

interface EventItemUiProps {
    event: Event
}

function EventItemUi({ event }: EventItemUiProps) {
    const categories = event["categories"]
    return (
        <div className={styles.event}>
            <div className={styles.event__header}>
                <div className={styles.event__date}>{event.date}</div>
                <div className={styles.event__info}>
                    <div className={styles.event__name}>{event.name}</div>
                    <ul className={styles.event__categories}>
                        {categories.map((category) => {
                            return (
                                <li key={category} className={styles.event__category}>{category}</li>
                            )
                        })}
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