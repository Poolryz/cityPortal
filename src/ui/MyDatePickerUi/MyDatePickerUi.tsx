"use client"
import { DayPicker } from "@daypicker/react";
import { useState } from "react";
import "@daypicker/react/style.css";

function MyDatePickerUi() {
    const [selected, setSelected] = useState<Date>();
    return (
        < DayPicker
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