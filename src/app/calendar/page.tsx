import { Calendar, ChevronDown, Clock, MapPin, Search } from "lucide-react"
import styles from "./styles.module.scss"
import Link from "next/link"
import MyDatePicker from "@/ui/MyDatePickerUi/MyDatePicker"

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
                    <div className={styles.upcomingEvents__item}>
                        <div className={styles.event}>
                            <div className={styles.event__header}>
                                <div className={styles.event__date}>14 июн</div>
                                <div className={styles.event__info}>
                                    <div className={styles.event__name}>Городской джазовый фестиваль</div>
                                    <ul className={styles.event__categories}>
                                        <li className={styles.event__category}>Культура</li>
                                        <li className={styles.event__category}>Фестиваль</li>
                                    </ul>
                                </div>

                            </div>
                            <div className={styles.event__footer}>
                                <div className={styles.event__time}>
                                    <Clock size={12} />
                                    <span className={styles.event__num}>
                                        18:00
                                    </span>
                                </div>
                                <div className={styles.event__location}>
                                    <MapPin size={12} />
                                    <span className={styles.event__text}>
                                        Центральный парк
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.upcomingEvents__item}>
                        <div className={styles.event}>
                            <div className={styles.event__header}>
                                <div className={styles.event__date}>14 июн</div>
                                <div className={styles.event__info}>
                                    <div className={styles.event__name}>Городской джазовый фестиваль</div>
                                    <ul className={styles.event__categories}>
                                        <li className={styles.event__category}>Культура</li>
                                        <li className={styles.event__category}>Фестиваль</li>
                                    </ul>
                                </div>

                            </div>
                            <div className={styles.event__footer}>
                                <div className={styles.event__time}>
                                    <Clock size={12} />
                                    <span className={styles.event__num}>
                                        18:00
                                    </span>
                                </div>
                                <div className={styles.event__location}>
                                    <MapPin size={12} />
                                    <span className={styles.event__text}>
                                        Центральный парк
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><div className={styles.upcomingEvents__item}>
                        <div className={styles.event}>
                            <div className={styles.event__header}>
                                <div className={styles.event__date}>14 июн</div>
                                <div className={styles.event__info}>
                                    <div className={styles.event__name}>Городской джазовый фестиваль</div>
                                    <ul className={styles.event__categories}>
                                        <li className={styles.event__category}>Культура</li>
                                        <li className={styles.event__category}>Фестиваль</li>
                                    </ul>
                                </div>

                            </div>
                            <div className={styles.event__footer}>
                                <div className={styles.event__time}>
                                    <Clock size={12} />
                                    <span className={styles.event__num}>
                                        18:00
                                    </span>
                                </div>
                                <div className={styles.event__location}>
                                    <MapPin size={12} />
                                    <span className={styles.event__text}>
                                        Центральный парк
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><div className={styles.upcomingEvents__item}>
                        <div className={styles.event}>
                            <div className={styles.event__header}>
                                <div className={styles.event__date}>14 июн</div>
                                <div className={styles.event__info}>
                                    <div className={styles.event__name}>Городской джазовый фестиваль</div>
                                    <ul className={styles.event__categories}>
                                        <li className={styles.event__category}>Культура</li>
                                        <li className={styles.event__category}>Фестиваль</li>
                                    </ul>
                                </div>

                            </div>
                            <div className={styles.event__footer}>
                                <div className={styles.event__time}>
                                    <Clock size={12} />
                                    <span className={styles.event__num}>
                                        18:00
                                    </span>
                                </div>
                                <div className={styles.event__location}>
                                    <MapPin size={12} />
                                    <span className={styles.event__text}>
                                        Центральный парк
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><div className={styles.upcomingEvents__item}>
                        <div className={styles.event}>
                            <div className={styles.event__header}>
                                <div className={styles.event__date}>14 июн</div>
                                <div className={styles.event__info}>
                                    <div className={styles.event__name}>Городской джазовый фестиваль</div>
                                    <ul className={styles.event__categories}>
                                        <li className={styles.event__category}>Культура</li>
                                        <li className={styles.event__category}>Фестиваль</li>
                                    </ul>
                                </div>

                            </div>
                            <div className={styles.event__footer}>
                                <div className={styles.event__time}>
                                    <Clock size={12} />
                                    <span className={styles.event__num}>
                                        18:00
                                    </span>
                                </div>
                                <div className={styles.event__location}>
                                    <MapPin size={12} />
                                    <span className={styles.event__text}>
                                        Центральный парк
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><div className={styles.upcomingEvents__item}>
                        <div className={styles.event}>
                            <div className={styles.event__header}>
                                <div className={styles.event__date}>14 июн</div>
                                <div className={styles.event__info}>
                                    <div className={styles.event__name}>Городской джазовый фестиваль</div>
                                    <ul className={styles.event__categories}>
                                        <li className={styles.event__category}>Культура</li>
                                        <li className={styles.event__category}>Фестиваль</li>
                                    </ul>
                                </div>

                            </div>
                            <div className={styles.event__footer}>
                                <div className={styles.event__time}>
                                    <Clock size={12} />
                                    <span className={styles.event__num}>
                                        18:00
                                    </span>
                                </div>
                                <div className={styles.event__location}>
                                    <MapPin size={12} />
                                    <span className={styles.event__text}>
                                        Центральный парк
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}