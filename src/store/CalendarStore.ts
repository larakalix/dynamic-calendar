import create from "zustand";
import { getDaysInMonth } from "../fn/utils";
import type { Month } from "../types/Month";

type CalendarStore = {
    currentMonth: Month;
    selectedDay: Date | null;
    prevMonth: () => void;
    nextMonth: () => void;
    selectDay: (day: Date | null) => void;
};

export const calendarStore = create<CalendarStore>((set, get) => ({
    currentMonth: getDaysInMonth(new Date().getMonth()),
    selectedDay: null,
    // setCurrentMonth: (month: number) => {},
    prevMonth: () => {
        const { month, year } = get().currentMonth;

        set({ currentMonth: getDaysInMonth(month - 1, year) });
    },
    nextMonth: () => {
        const { month, year } = get().currentMonth;

        set({ currentMonth: getDaysInMonth(month + 1, year) });
    },
    selectDay: (selectedDay: Date | null) => {
        set({ selectedDay });
    },
}));
