import { Drama, Factory, Flag, GraduationCap } from "lucide-react"
import styles from "./styles.module.scss"

function AboutCityComponent() {

    const date = new Date().getFullYear()
    const yearCity = date - 1785
    function wordFinish(num: number) {
        let txt
        let count = num % 100;
        if (count >= 5 && count <= 20) {
            txt = 'лет';
        } else {
            count = count % 10;
            if (count == 1) {
                txt = 'год';
            } else if (count >= 2 && count <= 4) {
                txt = 'года';
            } else {
                txt = 'лет';
            }
        }
        return txt;
    }

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
                        <div className={styles['about-city__number']}>{yearCity}</div>
                        <div className={styles['about-city__label']}>{wordFinish(yearCity)}</div>
                        <div className={styles['about-city__info']}>Истории города</div>
                    </li>
                    <li className={styles['about-city__item']}>
                        <Factory color="#1669e3" size={32} />
                        <div className={styles['about-city__number']}>200+</div>
                        <div className={styles['about-city__label']}>предприятий</div>
                        <div className={styles['about-city__info']}>Работают в Лысьве</div>
                    </li>
                    <li className={styles['about-city__item']}>
                        <GraduationCap color="#1669e3" size={32} />
                        <div className={styles['about-city__number']}>7+</div>
                        <div className={styles['about-city__label']}>учебных заведений</div>
                        <div className={styles['about-city__info']}>Образование</div>
                    </li>
                    <li className={styles['about-city__item']}>
                        <Drama color="#1669e3" size={32} />
                        <div className={styles['about-city__number']}>50+</div>
                        <div className={styles['about-city__label']}>культурных объектов</div>
                        <div className={styles['about-city__info']}>Культура и досуг</div>
                    </li>
                </ul>
                <img src="/about-city.jpg" className={styles['about-city__img']} />
            </div>
        </div>
    )
}
export default AboutCityComponent