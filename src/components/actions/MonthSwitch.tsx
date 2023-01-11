import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { calendarStore } from "../../store/CalendarStore";

type Props = {
    title: string;
};

export function MonthSwitch({ title }: Props) {
    const { prevMonth, nextMonth } = calendarStore((state) => state);

    return (
        <div className="flex items-center justify-between w-full">
            <button onClick={prevMonth}>
                <MdOutlineKeyboardArrowLeft />
            </button>
            <span className="text-[1.2rem] my-4 p-2">{title}</span>
            <button onClick={nextMonth}>
                <MdOutlineKeyboardArrowRight />
            </button>
        </div>
    );
}
