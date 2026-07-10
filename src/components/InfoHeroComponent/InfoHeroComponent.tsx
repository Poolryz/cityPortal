import { LucideCalendarDays, MapPinIcon, Users } from "lucide-react";
import styles from "./styles.module.scss";
function InfoHeroComponent() {
    return (
        <div className={styles["info-hero"]}>
            <ul className={styles["info-hero__list"]}>
                <li className={styles["info-hero__item"]}>
                    <MapPinIcon />
                    <div className={styles["info-hero__block"]}>
                        <label className={styles["info-hero__label"]}>Пермский край</label>
                        <span className={styles["info-hero__span"]}>Западный Урал</span>
                    </div>
                </li>
                <li className={styles["info-hero__item"]}>
                    <Users />
                    <div className={styles["info-hero__block"]}>
                        <label className={styles["info-hero__label"]}>≈ 58000</label>
                        <span className={styles["info-hero__span"]}>Жителей</span>
                    </div>
                </li>
                <li className={styles["info-hero__item"]}>
                    <LucideCalendarDays />
                    <div className={styles["info-hero__block"]}>
                        <label className={styles["info-hero__label"]}>1785</label>
                        <span className={styles["info-hero__span"]}>Год основания</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default InfoHeroComponent