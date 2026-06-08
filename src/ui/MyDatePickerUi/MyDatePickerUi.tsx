"use client"
import { DayPicker } from "@daypicker/react";
import { useState } from "react";
import "@daypicker/react/style.css";
import styles from "./styles.module.scss";

function MyDatePickerUi({ onDate }) {
    const [selected, setSelected] = useState<Date>();
    return (
        < DayPicker
            className={onDate ? styles.rdpRoot + " " + styles.rdpRoot_active : styles.rdpRoot}
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
                selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
            }
        />
    )
}
export default MyDatePickerUi