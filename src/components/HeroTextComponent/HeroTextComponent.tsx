import { ChevronRight } from "lucide-react";
import styles from "./styles.module.scss"
import Link from "next/link";

function HeroTextComponent() {
    return (
        <div className={styles['text-hero']}>
            <span className={styles['text-hero__span']}>Добро пожаловать в</span>
            <h1 className={styles['text-hero__title-h1']}>Лысьву</h1>
            <h2 className={styles['text-hero__title']}>Городской портал <Link href={"/"} className={styles['text-hero__link']}>LysvaLife</Link></h2>
            <p className={styles['text-hero__text']}>Лысьва - город богатой историей, сильными традициями и людьми, которые создают бдущее.</p>
            <button className={styles['text-hero__button']}>Узнать больше о городе <ChevronRight /></button>
        </div>
    )
}
export default HeroTextComponent