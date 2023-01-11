import { calendarStore } from "../../store/CalendarStore";

export function Selections() {
    const { selectedDay } = calendarStore((state) => state);

    if (!selectedDay) return null;

    return (
        <div className="w-full bg-cyan-400 flex items-center justify-center py-4 mt-4">
            <h1 className="text-2xl font-bold text-white">
                {selectedDay?.toDateString()}
            </h1>

            <ul>
                <li></li>
            </ul>
        </div>
    );
}
