import useDatePicker from "../hooks/useDatePicker"

export type DateItemStatusType = 'show' | 'hide' | 'disable' | 'selected'
export type TimeItemStatusType = 'show' | 'hide' | 'disable' | 'selected'

export interface IDateItem {
    id: string
    text: string
    status: DateItemStatusType
}

export interface ITimeItem {
    id: string
    text: string
    status: DateItemStatusType
    hour: number
    minute: number
}

export interface IDateValue {
    date: number
    month: number
    year: number
}

export interface ITimeValue {
    hour: number
    minute: number
    second: number
}

export type DatePickerType = ReturnType<typeof useDatePicker>

export interface IUseDatePicker {
    minDate?: Date
    maxDate?: Date
    minTime?: Date
    maxTime?: Date
    timeLabel?: string
    fromTimeLabel?: string
    toTimeLabel?: string
    timeType?: number // 12 or 24
}

export interface DatePickerValue {
    year: number
    month: number
    date: number
    hour: number
    minute: number
    second: number
    fromHour: number
    fromMinute: number
    fromSecond: number
    toHour: number
    toMinute: number
    toSecond: number
}

export interface DatePickerDateValue {
    year: number
    month: number
    date: number
}

export interface DatePickerTimeValue {
    hour: number
    minute: number
    second: number
}

export interface DatePickerFromTimeValue {
    hour: number
    minute: number
    second: number
}

export interface DatePickerToTimeValue {
    hour: number
    minute: number
    second: number
}