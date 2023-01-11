import { format } from "date-fns";
import { calendarStore } from "../../store/CalendarStore";
import { useDay } from "./hooks/useDay";

type Props = {
    month: number;
    day: Date;
    preview?: boolean;
};

export function Day({ month, day, preview }: Props) {
    const { selectDay } = calendarStore((state) => state);
    const { isAble, boxStyle, dayStyle, textStyles } = useDay({
        month,
        day,
        preview,
    });

    return (
        <button
            className={`bg-white rounded-md flex ${boxStyle}`}
            disabled={isAble}
            onClick={() => selectDay(day)}
        >
            <h1 className={`${textStyles}`}>
                {!preview && (
                    <span className="block w-full">{format(day, "EEEE")}</span>
                )}
                <span className={`block w-full ${dayStyle}`}>
                    {" "}
                    {format(day, "dd")}
                </span>
            </h1>
        </button>
    );
}
