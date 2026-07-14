import { ChevronRightIcon } from "lucide-react"
import styles from "./styles.module.scss"

function PagesItemComponent({ icon, name, text, active, ...props }) {

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
            <button className={`${styles["item__button"]} ${active ? styles["item__button_active"] : ""}`}>
                {active ? "Перейти" : "Скоро"}
                {active ? <ChevronRightIcon /> : ""}
            </button>
        </li>
    )
}
export default PagesItemComponent