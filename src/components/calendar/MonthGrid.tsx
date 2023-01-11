import { Children, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Day } from "..";
import { calendarStore } from "../../store/CalendarStore";

export function MonthGrid() {
    const { currentMonth, selectedDay, selectDay } = calendarStore(
        (state) => state
    );
    const ref = useRef(null);

    const handleClickOutside = () => {
        if (selectedDay) selectDay(null);
    };

    useOnClickOutside(ref, handleClickOutside);

    return (
        <>
            <div ref={ref} className={`grid grid-cols-7 grid-rows-5 gap-3`}>
                {Children.toArray(
                    currentMonth.days.map((day, index) => (
                        <Day
                            month={currentMonth.month}
                            day={day}
                            preview={false}
                        />
                    ))
                )}
            </div>
        </>
    );
}
