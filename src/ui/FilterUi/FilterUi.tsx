'use client'

import styles from "./styles.module.scss"
import { useState } from "react";
import MyDatePickerUi from "../MyDatePickerUi/MyDatePickerUi";


function FilterUi() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    return (
        <div className={styles.filter}>
            <div className={styles.filter__block}>
                <label className={styles.filter__title}>Фильтр</label>
                <ul className={styles.filter__list}>
                    <li className={styles.filter__item}>
                        <button onClick={() => { setSelectedCategory('all') }} className={styles.filter__link}>Все</button>
                    </li>
                    <li className={styles.filter__item}>
                        <button onClick={() => { setSelectedCategory('culture') }} className={styles.filter__link}>Культура</button>
                    </li>
                    <li className={styles.filter__item}>
                        <button onClick={() => { setSelectedCategory('sport') }} className={styles.filter__link}>Спорт</button>
                    </li>
                    <li className={styles.filter__item}>
                        <button onClick={() => { setSelectedCategory('festival') }} className={styles.filter__link}>Фестивали</button>
                    </li>
                    <li className={styles.filter__item}>
                        <button onClick={() => { setSelectedCategory('education') }} className={styles.filter__link}>Оброзование</button>
                    </li>
                </ul>
            </div>
            <MyDatePickerUi />
        </div>
    )
}
export default FilterUi