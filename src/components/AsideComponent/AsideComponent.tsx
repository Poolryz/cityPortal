"use client"
import { Building2, CalendarDays, Landmark, Mail, Map, MapPin } from "lucide-react";
import Link from "next/link";
import styles from "./AsideComponent.module.scss"
import { usePathname } from "next/navigation";

export default function AsideComponent() {
    const pathname = usePathname()
    console.log(pathname);

    const links = [
        { name: 'Календарь', href: '/calendar' },
        { name: 'Достопремечательности', href: '/dostop' },
        { name: 'Организации', href: '/company' },
        { name: 'Карта города', href: '/map' }
    ]
    return (
        <aside className={styles.aside}>
            <div className={styles.aside__content}>
                <Link href={"/"} className={styles.logotype}>
                    <MapPin color="#389af5" size={28} className="logotype__icon" />
                    <span className={styles.logotype__text}>LysvaLife</span>
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.nav__list}>
                        <li className={`${styles.nav__item} ${styles.nav__item_active}`}>
                            <CalendarDays className={styles.nav__icon} size={28} color="#1677ff" />
                            <Link className={styles.nav__link} href={"/calendar"}>Календарь</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Landmark className={styles.nav__icon} size={28} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/dostop"}>Достопремечательности</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Building2 className={styles.nav__icon} size={28} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/company"}>Организации</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Map className={styles.nav__icon} size={28} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/map"}>Карта города</Link >
                        </li>
                        <li className={styles.nav__item}>
                            <Mail className={styles.nav__icon} size={28} color="#8C8C8C" />
                            <Link className={styles.nav__link} href={"/contacts"}>Контакты</Link >
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

