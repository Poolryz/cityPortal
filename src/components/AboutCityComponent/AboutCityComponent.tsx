import { Flag } from "lucide-react"
import styles from "./styles.module.scss"

function AboutCityComponent() {
    return (
        <div className={`${styles['about-city']} _container`}>
            <div className={styles["about-city__content"]}>
                <div className={styles['about-city__text']}>
                    <div className={styles['about-city__span']}>О городе</div>
                    <div className={styles['about-city__title']}>
                        Лысьва - сердце <br />
                        Западного урала
                    </div>
                    <div className={styles['about-city__p']}>Город металлургов, мастеров и творческих людей. <br />
                        С богатым прошлым и уверенным взглядом в будущее.</div>
                    <button className={styles['about-city__button']}>Узнать больше</button>
                </div>
                <ul className={styles['about-city__list']}>
                    <li className={styles['about-city__item']}>
                        <Flag color="#1669e3" size={32} />
                        <div className={styles['about-city__number']}>239</div>
                        <div className={styles['about-city__label']}>лет</div>
                        <div className={styles['about-city__info']}>Истории города</div>
                    </li>
                    <li className={styles['about-city__item']}>
                        <Flag color="#1669e3" size={32} />
                        <div className={styles['about-city__number']}>239</div>
                        <div className={styles['about-city__label']}>лет</div>
                        <div className={styles['about-city__info']}>Истории города</div>
                    </li>
                    <li className={styles['about-city__item']}>
                        <Flag color="#1669e3" size={32} />
                        <div className={styles['about-city__number']}>239</div>
                        <div className={styles['about-city__label']}>лет</div>
                        <div className={styles['about-city__info']}>Истории города</div>
                    </li>
                    <li className={styles['about-city__item']}>
                        <Flag color="#1669e3" size={32} />
                        <div className={styles['about-city__number']}>239</div>
                        <div className={styles['about-city__label']}>лет</div>
                        <div className={styles['about-city__info']}>Истории города</div>
                    </li>
                </ul>
                <img src="/about-city.jpg" className={styles['about-city__img']} />
            </div>
        </div>
    )
}
export default AboutCityComponent