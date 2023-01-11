import { Children } from "react";
import { Selections } from "./Selections";
import { Day } from "../calendar/Day";
import type { CurrentMonthProps } from "../../types/Calendar";
import { calendarStore } from "../../store/CalendarStore";
import { MonthSwitch } from "../actions/MonthSwitch";

export function Sidebar() {
    const { currentMonth } = calendarStore((state) => state);

    return (
        <div className="w-64 h-full bg-blue-400 flex flex-col items-center justify-items-start">
            <div className="text-2xl font-bold text-white">
                <MonthSwitch
                    title={`${currentMonth.monthName} ${currentMonth.year}`}
                />
            </div>

            <MiniMonthGrid currentMonth={currentMonth} />

            <Selections />
        </div>
    );
}

function MiniMonthGrid({ currentMonth }: CurrentMonthProps) {
    return (
        <>
            <div className={`grid grid-cols-7 grid-rows-5 gap-1`}>
                {Children.toArray(
                    currentMonth.days.map((day, index) => (
                        <Day month={currentMonth.month} day={day} preview />
                    ))
                )}
            </div>
        </>
    );
}
