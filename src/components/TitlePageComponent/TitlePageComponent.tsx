"use client"
import { usePathname } from 'next/navigation';
import styles from './TitlePageComponent.module.scss';
import SearchPanelUi from "@/ui/SearchPanelUi/SearchPanelUi";

export default function TitlePageComponent({ search }: { search: boolean }) {
    const pathname = usePathname();
    const links = [
        { name: 'Календарь мероприятий', href: '/calendar', search: true },
        { name: 'Достопремечательности', href: '/dostop', search: true },
        { name: 'Организации города', href: '/company', search: true },
        { name: 'Карта города', href: '/map', search: false },
        { name: 'Контакты', href: '/contacts', search: false }
    ]

    return (
        <div className={styles.titlePanel}>
            <h1 className={styles.titlePanel__title}>
                {links.find(item => item.href === pathname)?.name}
            </h1>
            {links.find(item => item.href === pathname)?.search ? <SearchPanelUi /> : null}
        </div>
    )
}