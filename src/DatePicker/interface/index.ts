import useDatePicker from "../hooks/useDatePicker"

export type DateItemStatusType = 'show' | 'hide' | 'disable' | 'selected'

export interface IDateItem {
    id: string
    text: string
    status: DateItemStatusType
}


export interface IDateValue {
    date: number
    month: number
    year: number
}

export type DatePickerType = ReturnType<typeof useDatePicker>
