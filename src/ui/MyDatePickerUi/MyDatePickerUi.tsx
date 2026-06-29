"use client"
import { DayPicker } from "@daypicker/react";
import { useEffect, useState } from "react";
import "@daypicker/react/style.css";
import styles from "./styles.module.scss";
import { Calendar, ChevronDown } from "lucide-react";
import { ru } from "@daypicker/react/locale";

function MyDatePickerUi() {
    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<Date>();
    const [date, setDate] = useState(new Date());
    function formatDateChange(date: Date) {
        const changeDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
        })
        return changeDate
    }
    useEffect(() => {
        setIsPanelOpen(false)

    }, [selected])

    return (
        <>
            <div onClick={() => { return setIsPanelOpen(!isPanelOpen) }} className={styles.calendarInput}>
                <Calendar />
                <div className={styles.calendarInput__title}>{selected ? formatDateChange(selected) : formatDateChange(date)}</div>
                <ChevronDown />
            </div>
            < DayPicker
                locale={ru}
                className={isPanelOpen ? styles.rdpRoot + " " + styles.rdpRoot_active : styles.rdpRoot}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={
                    `Дата: ${formatDateChange(selected || date)}`
                }
            />
        </>
    )
}
export default MyDatePickerUi