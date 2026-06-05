import { Building2, CalendarDays, Landmark, Mail, Map, MapPin } from "lucide-react";
import Link from "next/link";
import styles from "./HeaderComponent.module.scss"

export default function HeaderComponent() {
    return (
        <header className="_container">
            <div className={styles.header__content}>
                <div className="logotype flex gap-3.5 p-5">
                    <MapPin color="#389af5" size={40} className="logotype__icon w-auto h-auto to-blue-400" />
                    <span className="logotype__text text-4xl font-bold">LysvaLife</span>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <CalendarDays size={18} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/calendar"}>Календарь</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Landmark size={18} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/dostop"}>Достопремечательности</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Building2 size={18} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/company"}>Организации</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Map size={18} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/map"}>Карта города</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Mail size={18} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/contacts"}>Контакты</Link >
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}