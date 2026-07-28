"use client"
import { ChevronRightIcon } from "lucide-react"
import styles from "./styles.module.scss"
import Link from "next/link"

function PagesItemComponent({ icon, name, text, active, link, ...props }: { icon: any, name: string, text: string, active: boolean, link?: string }) {

    return (
        <li className={styles.item}>
            <div className={`${styles["item__icon"]} ${active ? styles["item__icon_active"] : ""}`}>
                {icon}
            </div>

            <div className={styles["item__name"]}>
                {name}
            </div>
            <span className={styles["item__text"]}>
                {text}
            </span>
            <Link href={link ? link : "/"} className={`${styles["item__button"]} ${active ? styles["item__button_active"] : ""}`}>
                {active ? "Перейти" : "Скоро"}
                {active ? <ChevronRightIcon /> : ""}
            </Link>
        </li>
    )
}
export default PagesItemComponent