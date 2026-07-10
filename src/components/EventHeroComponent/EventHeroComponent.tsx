import { Calendar, Clock, MapPinIcon, MoveRight } from "lucide-react";
import styles from "./styles.module.scss";
import Link from "next/link";
function EventHeroComponent() {
    return (
        <div className={styles["event-hero"]}>
            <div className={styles["event-hero__body"]}>
                <div className={styles["event-hero__header"]}>
                    <h3 className={styles["event-hero__title"]}>Ближайшие события</h3>
                    <Link href={"/calendar"} className={styles["event-hero__link"]}>Все события <MoveRight /></Link>
                </div>
                <ul className={styles["event-hero__list"]}>
                    <li className={styles["event-hero__item"]}>
                        <div className={styles["event-hero__date"]}><div className={styles["event-hero__number"]}>24</div><div className={styles["event-hero__month"]}></div> мая</div>
                        <div className={styles["event-hero__info"]}>
                            <div className={styles["event-hero__name"]}>День славянской письменности и культуры</div>
                            <div className={styles["event-hero__location"]}>
                                <Clock size={12} /><span className={styles["event-hero__time"]}>Время: 19:00</span><MapPinIcon size={12} /><span className={styles["event-hero__place"]}> Лысьва</span>
                            </div>
                        </div>
                        <div className={styles["event-hero__category"]}>
                            Праздник
                        </div>
                    </li>
                    <li className={styles["event-hero__item"]}>
                        <div className={styles["event-hero__date"]}><div className={styles["event-hero__number"]}>24</div><div className={styles["event-hero__month"]}></div> мая</div>
                        <div className={styles["event-hero__info"]}>
                            <div className={styles["event-hero__name"]}>День славянской письменности и культуры</div>
                            <div className={styles["event-hero__location"]}>
                                <Clock size={12} /><span className={styles["event-hero__time"]}>Время: 19:00</span><MapPinIcon size={12} /><span className={styles["event-hero__place"]}> Лысьва</span>
                            </div>
                        </div>
                        <div className={styles["event-hero__category"]}>
                            Праздник
                        </div>
                    </li>
                    <li className={styles["event-hero__item"]}>
                        <div className={styles["event-hero__date"]}><div className={styles["event-hero__number"]}>24</div><div className={styles["event-hero__month"]}></div> мая</div>
                        <div className={styles["event-hero__info"]}>
                            <div className={styles["event-hero__name"]}>День славянской письменности и культуры</div>
                            <div className={styles["event-hero__location"]}>
                                <Clock size={12} /><span className={styles["event-hero__time"]}>Время: 19:00</span><MapPinIcon size={12} /><span className={styles["event-hero__place"]}> Лысьва</span>
                            </div>
                        </div>
                        <div className={styles["event-hero__category"]}>
                            Праздник
                        </div>
                    </li>
                    <li className={styles["event-hero__item"]}>
                        <div className={styles["event-hero__date"]}><div className={styles["event-hero__number"]}>24</div><div className={styles["event-hero__month"]}></div> мая</div>
                        <div className={styles["event-hero__info"]}>
                            <div className={styles["event-hero__name"]}>День славянской письменности и культуры</div>
                            <div className={styles["event-hero__location"]}>
                                <Clock size={12} /><span className={styles["event-hero__time"]}>Время: 19:00</span><MapPinIcon size={12} /><span className={styles["event-hero__place"]}> Лысьва</span>
                            </div>
                        </div>
                        <div className={styles["event-hero__category"]}>
                            Праздник
                        </div>
                    </li>
                    <li className={styles["event-hero__item"]}>
                        <div className={styles["event-hero__date"]}><div className={styles["event-hero__number"]}>24</div><div className={styles["event-hero__month"]}></div> мая</div>
                        <div className={styles["event-hero__info"]}>
                            <div className={styles["event-hero__name"]}>День славянской письменности и культуры</div>
                            <div className={styles["event-hero__location"]}>
                                <Clock size={12} /><span className={styles["event-hero__time"]}>Время: 19:00</span><MapPinIcon size={12} /><span className={styles["event-hero__place"]}> Лысьва</span>
                            </div>
                        </div>
                        <div className={styles["event-hero__category"]}>
                            Праздник
                        </div>
                    </li>
                </ul>
                <button className={styles["event-hero__button"]}><Calendar />Смотреть календарь событий</button>
            </div>
        </div>
    )
}
export default EventHeroComponent