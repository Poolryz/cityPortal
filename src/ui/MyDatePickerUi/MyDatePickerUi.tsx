"use client"
import { DayPicker } from "@daypicker/react";
import { useEffect, useState } from "react";
import "@daypicker/react/style.css";
import styles from "./styles.module.scss";
import { Calendar, ChevronDown } from "lucide-react";
import { ru } from "@daypicker/react/locale";
import useStore from "@/store/useStore";

function MyDatePickerUi() {
    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<Date | undefined>()
    const [date, setDate] = useState(new Date());

    const addDateStore = useStore((state: any) => state.addDate);
    const dateStore = useStore((state: any) => state.date);
    function formatDateChange(date: Date | undefined) {
        if (!date) return ""
        const changeDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
        })
        return changeDate
    }
    useEffect(() => {
        setIsPanelOpen(false)
        addDateStore(selected)
    }, [selected])


    return (
        <>
            <div onClick={() => { return setIsPanelOpen(!isPanelOpen) }} className={styles.calendarInput}>
                <Calendar />
                <div className={styles.calendarInput__title}>{dateStore ? formatDateChange(selected) : "Не выбрана дата"}</div>
                <ChevronDown />
            </div>
            < DayPicker
                locale={ru}
                className={isPanelOpen ? styles.rdpRoot + " " + styles.rdpRoot_active : styles.rdpRoot}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={
                    `Дата: ${dateStore ? formatDateChange(selected || date) : "Не выбрана дата"}`
                }
            />
        </>
    )
}
export default MyDatePickerUi