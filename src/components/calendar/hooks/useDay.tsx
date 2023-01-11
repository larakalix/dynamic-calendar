import clsx from "clsx";

type Props = {
    month: number;
    day: Date;
    preview?: boolean;
};

type HookResponse = {
    isAble: boolean;
    boxStyle: string;
    dayStyle: string;
    textStyles: string;
};

export const useDay = ({ month, day, preview }: Props): HookResponse => {
    const boxStyle = clsx({
        ["opacity-80"]: day.getMonth() !== month,
    });

    const textStyles = clsx({
        ["text-[0.8rem] font-light text-black p-1"]: preview,
        ["text-[1.1rem] font-bold text-black px-4 py-8"]: !preview,
    });

    const dayStyle = clsx({
        ["text-[0.8rem]"]: preview,
        ["text-[1.6rem] text-start"]: !preview,
    });

    return {
        isAble: day.getMonth() !== month,
        boxStyle,
        dayStyle,
        textStyles,
    };
};
