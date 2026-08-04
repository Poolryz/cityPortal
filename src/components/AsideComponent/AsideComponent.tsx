import { Building2, CalendarDays, Landmark, Mail, Map, MapPin } from "lucide-react";
import Link from "next/link";
import styles from "./AsideComponent.module.scss"
import { AsideItemComponent } from "../AsideItemComponent/AsideItemComponent";

export default function AsideComponent() {

    const links = [
        { name: 'Календарь', href: '/calendar', icon: <CalendarDays size={28} /> },
        { name: 'Достопремечательности', href: '/dostop', icon: <Landmark size={28} /> },
        { name: 'Организации', href: '/company', icon: <Building2 size={28} /> },
        { name: 'Карта города', href: '/map', icon: <Map size={28} /> },
        { name: 'Контакты', href: '/contacts', icon: <Mail size={28} /> }
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
                        {
                            links.map(item => {
                                return (
                                    <AsideItemComponent key={item.name} name={item.name} href={item.href} icon={item.icon} />
                                )
                            })
                        }

                    </ul>
                </nav>
            </div>
        </aside >
    )
}

