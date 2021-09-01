import React from 'react';

declare const useDatePicker$1: () => {
    state: {
        dateList: IDateItem[];
        selectedDateTime: Date;
        valueDateTime: Date;
        valueString: string;
        value: {
            year: number;
            month: number;
            date: number;
        };
        selectedYear: number;
        selectedMonth: number;
        selectedDate: number;
        status: boolean;
    };
    action: {
        selectDate: (dateInput: string) => void;
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
declare type DatePickerType$1 = ReturnType<typeof useDatePicker$1>;

interface Props {
    data: DatePickerType$1;
}
declare const DatePicker: React.FC<Props>;

declare const useDatePicker: () => {
    state: {
        dateList: IDateItem[];
        selectedDateTime: Date;
        valueDateTime: Date;
        valueString: string;
        value: {
            year: number;
            month: number;
            date: number;
        };
        selectedYear: number;
        selectedMonth: number;
        selectedDate: number;
        status: boolean;
    };
    action: {
        selectDate: (dateInput: string) => void;
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
