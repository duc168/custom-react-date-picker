import React from 'react';

declare const useDatePicker$1: ({ minDate, maxDate, minTime, maxTime, fromTimeLabel, toTimeLabel, timeLabel, timeType }: IUseDatePicker) => {
    state: {
        fromTimeList: ITimeItem[];
        toTimeList: ITimeItem[];
        timeList: ITimeItem[];
        dateList: IDateItem[];
        selectedDateTime: Date;
        valueDateTime: Date;
        valueString: string;
        value: {
            year: number;
            month: number;
            date: number;
            hour: number;
            minute: number;
            second: number;
            fromHour: number;
            fromMinute: number;
            fromSecond: number;
            toHour: number;
            toMinute: number;
            toSecond: number;
        };
        selectedYear: number;
        selectedMonth: number;
        selectedDate: number;
        status: boolean;
    };
    label: {
        fromTimeLabel: string | undefined;
        toTimeLabel: string | undefined;
        timeLabel: string | undefined;
    };
    action: {
        selectFromTime: (timeItem: ITimeItem) => void;
        selectToTime: (timeItem: ITimeItem) => void;
        selectDate: (dateInput: string) => void;
        selectTime: (timeItem: ITimeItem) => void;
        showDatePicker: () => void;
        hideDatePicker: () => void;
        previousMonth: () => void;
        nextMonth: () => void;
        updateSelectedYear: (payload: number) => void;
        updateSelectedMonth: (payload: number) => void;
        updateSelectedDate: (payload: number) => void;
    };
};

declare type DateItemStatusType = 'show' | 'hide' | 'disable' | 'selected';
interface IDateItem {
    id: string;
    text: string;
    status: DateItemStatusType;
}
interface ITimeItem {
    id: string;
    text: string;
    status: DateItemStatusType;
    hour: number;
    minute: number;
}
declare type DatePickerType$1 = ReturnType<typeof useDatePicker$1>;
interface IUseDatePicker {
    minDate?: Date;
    maxDate?: Date;
    minTime?: Date;
    maxTime?: Date;
    timeLabel?: string;
    fromTimeLabel?: string;
    toTimeLabel?: string;
    timeType?: number;
}

interface Props {
    data: DatePickerType$1;
}
declare const DatePicker: React.FC<Props>;

declare const useDatePicker: ({ minDate, maxDate, minTime, maxTime, fromTimeLabel, toTimeLabel, timeLabel, timeType }: IUseDatePicker) => {
    state: {
        fromTimeList: ITimeItem[];
        toTimeList: ITimeItem[];
        timeList: ITimeItem[];
        dateList: IDateItem[];
        selectedDateTime: Date;
        valueDateTime: Date;
        valueString: string;
        value: {
            year: number;
            month: number;
            date: number;
            hour: number;
            minute: number;
            second: number;
            fromHour: number;
            fromMinute: number;
            fromSecond: number;
            toHour: number;
            toMinute: number;
            toSecond: number;
        };
        selectedYear: number;
        selectedMonth: number;
        selectedDate: number;
        status: boolean;
    };
    label: {
        fromTimeLabel: string | undefined;
        toTimeLabel: string | undefined;
        timeLabel: string | undefined;
    };
    action: {
        selectFromTime: (timeItem: ITimeItem) => void;
        selectToTime: (timeItem: ITimeItem) => void;
        selectDate: (dateInput: string) => void;
        selectTime: (timeItem: ITimeItem) => void;
        showDatePicker: () => void;
        hideDatePicker: () => void;
        previousMonth: () => void;
        nextMonth: () => void;
        updateSelectedYear: (payload: number) => void;
        updateSelectedMonth: (payload: number) => void;
        updateSelectedDate: (payload: number) => void;
    };
};
declare type DatePickerType = DatePickerType$1;

export { DatePickerType, DatePicker as default, useDatePicker };
//# sourceMappingURL=index.d.ts.map
