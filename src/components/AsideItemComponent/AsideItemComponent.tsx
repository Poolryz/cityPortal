"use client"
import Link from 'next/link'
import styles from './AsideItemComponent.module.scss'
import { usePathname } from 'next/navigation'
export function AsideItemComponent({ name, href, icon }: { name: string, href: string, icon: React.ReactNode }) {
    const pathname = usePathname()
    const active = pathname === href

    return (
        <li className={`${styles.item} ${active ? styles.item_active : ''}`}>
            {icon}
            <Link className={styles.link} href={href}>{name}</Link >
        </li>
    )
}