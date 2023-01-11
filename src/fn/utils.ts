import { format } from "date-fns";
import type { Month } from "../types/Month";

export const getDaysInMonth = (
    month: number,
    year: number = new Date().getFullYear()
): Month => {
    if (month > 11) {
        month = 0;
        year++;
    }

    if (month < 0) {
        month = 11;
        year--;
    }

    const totalDays = 35;
    const date = new Date(year, month, 1);
    const monthName = format(date, "MMMM");
    const days: Date[] = [];

    while (days.length < totalDays) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return {
        monthName,
        month,
        days,
        year,
    };
};

export const getYearMonths = (year: number): Month[] => {
    const months: Month[] = [];

    for (let i = 0; i < 12; i++) months.push(getDaysInMonth(i, year));

    return months;
};
