'use client'

import styles from "./styles.module.scss"
import { useEffect, useState } from "react";
import MyDatePickerUi from "../MyDatePickerUi/MyDatePickerUi";
import useStore from "@/store/useStore";

function FilterUi() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const addCategory = useStore((state: any) => state.addCategory)

    useEffect(() => {
        addCategory(selectedCategory)
    }, [selectedCategory])

    const categoriesObj = {
        "all": "Все",
        "culture": "Культура",
        "sport": "Спорт",
        "festival": "Фестиваль",
        "education": "Образование"
    }




    return (
        <div className={styles.filter}>
            <div className={styles.filter__block}>
                <label className={styles.filter__title}>Фильтр:</label>
                <ul className={styles.filter__list}>
                    {Object.entries(categoriesObj).map(([key, value]) => (
                        <li className={styles.filter__item} key={key}>
                            <button
                                onClick={() => setSelectedCategory(key)}
                                className={`${styles.filter__link} ${selectedCategory === key ? styles.filter__link_active : ""}`}
                            >
                                {value}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <MyDatePickerUi />
        </div>
    )
}

export default FilterUi