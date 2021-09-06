import DatePickerComponent from './DatePicker'
import useDatePickerHook from './DatePicker/hooks/useDatePicker'
import { DatePickerType as DatePickerTypeType, DatePickerValue as DatePickerValueValue } from './DatePicker/interface'

export const useDatePicker = useDatePickerHook
export type DatePickerType = DatePickerTypeType
export type DatePickerValue = DatePickerValueValue
export default DatePickerComponent