import styles from "./styles.module.scss"
import TitlePageComponent from "@/components/TitlePageComponent/TitlePageComponent";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactsPage() {
    return (<>

        <TitlePageComponent search={false} />
        <div className={styles["contacts-page"]}>
            <div className={styles.label}>
                <div className={styles.label__title}>Свяжитесь со мной</div>
                <div className={styles.label__text}>Есть вопросы о городе или предложения для платформы? Я всегда рад обратной связи.</div>
            </div >
            <div className={styles["contacts-wrapper"]}>
                <form action="" className={styles["form-message"]}>
                    <div className={styles["form-message__title"]}>Написать сообщение</div>
                    <ul className={styles["form-message__list"]}>
                        <li className={styles["form-message__item"]}>
                            <label htmlFor="name" className={styles["form-message__label"]}>Ваше имя</label>
                            <input type="text" id="name" className={styles["form-message__input"]} placeholder="Иван Иванов" />
                        </li>
                        <li className={styles["form-message__item"]}>
                            <label htmlFor="email" className={styles["form-message__label"]}>Email</label>
                            <input type="email" id="email" className={styles["form-message__input"]} placeholder="ivan@example.com" />
                        </li>
                        <li className={styles["form-message__item"]}>
                            <label htmlFor="theme" className={styles["form-message__label"]}>Тема</label>
                            <input type="text" id="theme" className={styles["form-message__input"]} placeholder="Предложение по платформе" />
                        </li>
                        <li className={styles["form-message__item"]}>
                            <label htmlFor="message" className={styles["form-message__label"]}>Сообщение</label>
                            <textarea id="message" className={styles["form-message__textarea"]} placeholder="Здравствуйте! Хотел бы предложить добавить раздел с городскими новостями…"></textarea>
                        </li>
                    </ul>
                </form>
                <div className={styles.contacts}>
                    <ul className={styles.contacts__list}>
                        <li className={styles.contacts__item}>
                            <div className={styles["contacts__icon-wrapper"]}>
                                <Mail className={styles.contacts__icon} />
                            </div>
                            <div className={styles.contacts__text}>
                                <div className={styles.contacts__label}>
                                    Email
                                </div>
                                <div className={styles.contacts__value}>hello@gorodgid.ru</div>
                            </div>
                        </li>
                        <li className={styles.contacts__item}>
                            <div className={`${styles["contacts__icon-wrapper"]} ${styles["contacts__icon-wrapper_telegram"]}`}>
                                <MessageCircle className={`${styles.contacts__icon} ${styles.contacts__icon_telegram}`} />
                            </div>
                            <div className={styles.contacts__text}>
                                <div className={styles.contacts__label}>
                                    Telegram
                                </div>
                                <div className={styles.contacts__value}>@Poolryz9</div>
                            </div>
                        </li>
                        <li className={styles.contacts__item}>
                            <div className={`${styles["contacts__icon-wrapper"]} ${styles["contacts__icon-wrapper_city"]}`}>
                                <MapPin className={`${styles.contacts__icon} ${styles.contacts__icon_city}`} />
                            </div>
                            <div className={styles.contacts__text}>
                                <div className={styles.contacts__label}>
                                    Город
                                </div>
                                <div className={styles.contacts__value}>Лысьва, Россия</div>
                            </div>
                        </li>
                        <li className={styles.contacts__item}>
                            <div className={`${styles["contacts__icon-wrapper"]} ${styles["contacts__icon-wrapper_time"]}`}>
                                <Clock className={`${styles.contacts__icon} ${styles.contacts__icon_time}`} />
                            </div>
                            <div className={styles.contacts__text}>
                                <div className={styles.contacts__label}>
                                    Время ответа
                                </div>
                                <div className={styles.contacts__value}>В течение 24 часов</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}