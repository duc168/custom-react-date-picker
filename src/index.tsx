import DatePickerComponent from './DatePicker'
import useDatePickerHook from './DatePicker/hooks/useDatePicker'
import { DatePickerType as DatePickerTypeType } from './DatePicker/interface'

export const useDatePicker = useDatePickerHook
export type DatePickerType = DatePickerTypeType
export default DatePickerComponent