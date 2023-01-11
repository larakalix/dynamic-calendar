import { calendarStore } from "../store/CalendarStore";
import { MonthSwitch } from "./actions/MonthSwitch";

export function Header() {
    const { currentMonth } = calendarStore((state) => state);

    return (
        <div className="w-full h-16 bg-red-400 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">
                <MonthSwitch
                    title={`${currentMonth.monthName} ${currentMonth.year}`}
                />
            </h1>
        </div>
    );
}
