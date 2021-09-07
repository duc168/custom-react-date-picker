import { addDays, addMonths, differenceInMinutes, differenceInMonths, setHours, setMinutes, setSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import { formatDate, getDateList, getTimeList } from '../helpers'
import { DatePickerDateValue, DatePickerTimeRangeValue, DatePickerTimeValue, DatePickerValue, ITimeItem, ITimeValue, IUseDatePicker } from '../interface'
import _ from 'lodash'

const useDatePicker = ({ 
    minDate = addDays(new Date(), -1),
    maxDate = new Date(2021, 11, 1),
    minTime = setSeconds(setMinutes(setHours(new Date(), 0), 0), 0),
    maxTime = setSeconds(setMinutes(setHours(new Date(), 23), 0), 0),
    fromTimeLabel,
    toTimeLabel,
    timeLabel,
    timeType = 24,
    onSelectDate,
    onSelectTime,
    onSelectFromTime,
    onSelectToTime
 }: IUseDatePicker) => {
    const [status, setStatus] = useState(false)
    const [selectedYear, setSelectedYear] = useState<number>(0)
    const [selectedMonth, setSelectedMonth] = useState<number>(0)
    const [selectedDate, setSelectedDate] = useState<number>(0)

    const [selectedHour, setSelectedHour] = useState<number>(0)
    const [selectedMinute, setSelectedMinute] = useState<number>(0)
    const [selectedSecond, setSelectedSecond] = useState<number>(0)

    const [selectedFromHour, setSelectedFromHour] = useState<number>(0)
    const [selectedFromMinute, setSelectedFromMinute] = useState<number>(0)
    const [selectedFromSecond, setSelectedFromSecond] = useState<number>(0)

    const [selectedToHour, setSelectedToHour] = useState<number>(0)
    const [selectedToMinute, setSelectedToMinute] = useState<number>(0)
    const [selectedToSecond, setSelectedToSecond] = useState<number>(0)

    const [valueHour, setValueHour] = useState<number>(0)
    const [valueMinute, setValueMinute] = useState<number>(0)
    const [valueSecond, setValueSecond] = useState<number>(0)

    const [valueFromHour, setValueFromHour] = useState<number>(0)
    const [valueFromMinute, setValueFromMinute] = useState<number>(0)
    const [valueFromSecond, setValueFromSecond] = useState<number>(0)

    const [valueToHour, setValueToHour] = useState<number>(0)
    const [valueToMinute, setValueToMinute] = useState<number>(0)
    const [valueToSecond, setValueToSecond] = useState<number>(0)

    const [valueYear, setValueYear] = useState<number>(0)
    const [valueMonth, setValueMonth] = useState<number>(0)
    const [valueDate, setValueDate] = useState<number>(0)

    // useEffect(() => {
    //     const now = new Date() 
    //     const currentYear = now.getFullYear()
    //     const currentMonth = now.getMonth()
    //     const currentDate = now.getDate()
    //     setSelectedYear(currentYear)
    //     setSelectedMonth(currentMonth)
    //     setSelectedDate(currentDate)
    // }, [])

    const showDatePicker = () => {
        setStatus(true)
    }
    const hideDatePicker = () => {
        setStatus(false)
    }
    const updateSelectedYear = (payload: number) => {
        setSelectedYear(payload)
    }
    const updateSelectedMonth = (payload: number) => {
        setSelectedMonth(payload)
    }
    const updateSelectedDate = (payload: number) => {
        setSelectedDate(payload)
    }

    const updateSelectedHour = (payload: number) => {
        setSelectedHour(payload)
    }
    const updateSelectedMinute = (payload: number) => {
        setSelectedMinute(payload)
    }
    const updateSelectedSecond = (payload: number) => {
        setSelectedSecond(payload)
    }

    const updateSelectedFromHour = (payload: number) => {
        setSelectedFromHour(payload)
    }
    const updateSelectedFromMinute = (payload: number) => {
        setSelectedFromMinute(payload)
    }
    const updateSelectedFromSecond = (payload: number) => {
        setSelectedFromSecond(payload)
    }

    const updateSelectedToHour = (payload: number) => {
        setSelectedToHour(payload)
    }
    const updateSelectedToMinute = (payload: number) => {
        setSelectedToMinute(payload)
    }
    const updateSelectedToSecond = (payload: number) => {
        setSelectedToSecond(payload)
    }

    const selectDate = (dateInput: string) => {
        const datePayload = parseInt(dateInput, 10)
        const result: DatePickerDateValue ={
            year: selectedYear,
            month: selectedMonth,
            date: datePayload
        }
        setSelectedDate(result.date)
        setValueDate(result.date)
        setValueMonth(result.month)
        setValueYear(result.year)
        onSelectDate && onSelectDate(result)
    }
    const selectTime = (timeItem: ITimeItem) => {
        const result: DatePickerTimeValue = {
            hour: timeItem.hour,
            minute: timeItem.minute,
            second: 0
        }
        setValueHour(result.hour)
        setValueMinute(result.minute)
        setValueSecond(result.second)
        onSelectTime && onSelectTime(result)
    }

    const selectFromTime = (timeItem: ITimeItem) => {
        const toTime = new Date(2000, 1,1, valueToHour, valueToMinute)
        const fromTime = new Date(2000, 1, 1, timeItem.hour, timeItem.minute)
        const fromTimeIsGreaterThanToTime = differenceInMinutes(toTime, fromTime) <= 0
        if (fromTimeIsGreaterThanToTime) {
            const result1: DatePickerTimeRangeValue = {
                fromHour: timeItem.hour,
                fromMinute: timeItem.minute,
                fromSecond: 0,
                toHour: 0,
                toMinute: 0,
                toSecond: 0
            }
            setValueToHour(result1.toHour)
            setValueToMinute(result1.toMinute)
            setValueToSecond(result1.toSecond)
            setValueFromHour(result1.fromHour)
            setValueFromMinute(result1.fromMinute)
            setValueFromSecond(result1.fromSecond)
            onSelectFromTime && onSelectFromTime(result1)
            return
        }
        const result2: DatePickerTimeRangeValue = {
            fromHour: timeItem.hour,
            fromMinute: timeItem.minute,
            fromSecond: 0,
            toHour: valueToHour,
            toMinute: valueToMinute,
            toSecond: valueToSecond
        }
        setValueFromHour(result2.fromHour)
        setValueFromMinute(result2.fromMinute)
        setValueFromSecond(result2.fromSecond)
        onSelectFromTime && onSelectFromTime(result2)
    }

    const selectToTime = (timeItem: ITimeItem) => {
        const toTime = new Date(2000, 1,1, timeItem.hour, timeItem.minute)
        const fromTime = new Date(2000, 1, 1, valueFromHour, valueFromMinute)
        const toTimeIsLessThanFromTime = differenceInMinutes(toTime, fromTime) <= 0
        if (toTimeIsLessThanFromTime) {
            const result1: DatePickerTimeRangeValue = {
                fromHour: 0,
                fromMinute: 0,
                fromSecond: 0,
                toHour: timeItem.hour,
                toMinute: timeItem.minute,
                toSecond: 0,
            }
            setValueFromHour(result1.fromHour)
            setValueFromMinute(result1.fromMinute)
            setValueFromSecond(result1.fromSecond)
            setValueToHour(result1.toHour)
            setValueToMinute(result1.toMinute)
            setValueToSecond(result1.toSecond)
            onSelectToTime && onSelectToTime(result1)
            return
        }
        const result2: DatePickerTimeRangeValue = {
            fromHour: valueFromHour,
            fromMinute: valueFromMinute,
            fromSecond: valueFromSecond,
            toHour: timeItem.hour,
            toMinute: timeItem.minute,
            toSecond: 0,
        }
        setValueToHour(result2.toHour)
        setValueToMinute(result2.toMinute)
        setValueToSecond(result2.toSecond)
        onSelectToTime && onSelectToTime(result2)
    }

    // const nextMonthLegacy = () => {
    //     const currentMonth = selectedMonth
    //     const currentYear = selectedYear
    //     if (currentMonth >= 0 && currentMonth < 11) {
    //         setSelectedMonth(currentMonth + 1)
    //     }
    //     if (currentMonth === 11) {
    //         setSelectedMonth(0)
    //         setSelectedYear(currentYear + 1)
    //     }
    //     const yearCheck = selectedYear === valueYear
    //     const monthCheck = selectedMonth === valueMonth
    //     if (yearCheck && monthCheck) {
    //         setSelectedDate(valueDate)
    //     } else {
    //         setSelectedDate(0)
    //     }

    // }
    const updateCurrentSelectedDate = () => {
        const yearCheck = selectedYear === valueYear
        const monthCheck = selectedMonth === valueMonth
        if (yearCheck && monthCheck) {
            setSelectedDate(valueDate)
        } else {
            setSelectedDate(0)
        }
    }
    const nextMonth = () => {
        const currentDate = new Date(selectedYear, selectedMonth)
        const nextMonth = addMonths(currentDate, 1)
        const isBiggerThanMaxDate = differenceInMonths(new Date(maxDate.getFullYear(), maxDate.getMonth()), nextMonth) < 0
        if (isBiggerThanMaxDate) return
        setSelectedMonth(nextMonth.getMonth())
        setSelectedYear(nextMonth.getFullYear())
        updateCurrentSelectedDate()

    }
    // const previousMonthLegacy = () => {
    //     const currentMonth = selectedMonth
    //     const currentYear = selectedYear
    //     if (currentMonth > 0 && currentMonth <= 11) {
    //         setSelectedMonth(currentMonth - 1)
    //     }
    //     if (currentMonth === 0) {
    //         setSelectedMonth(11)
    //         setSelectedYear(currentYear - 1)
    //     }
    //     const yearCheck = selectedYear === valueYear
    //     const monthCheck = selectedMonth === valueMonth
    //     if (yearCheck && monthCheck) {
    //         setSelectedDate(valueDate)
    //     } else {
    //         setSelectedDate(0)
    //     }
    // }
    const previousMonth = () => {
        const currentDate = new Date(selectedYear, selectedMonth)
        const previousMonth = addMonths(currentDate, -1)
        const isSmallerThanMinDate = differenceInMonths(previousMonth, new Date(minDate.getFullYear(), minDate.getMonth())) < 0
        if (isSmallerThanMinDate) return
        setSelectedMonth(previousMonth.getMonth())
        setSelectedYear(previousMonth.getFullYear())
        updateCurrentSelectedDate()
    }
    //
    
    const selectedDateTime =  new Date(selectedYear, selectedMonth, selectedDate === 0 ? 1 : selectedDate)
    const selectedTime =  new Date(2000, 2, 2, selectedHour, selectedMinute, selectedSecond)
    const selectedFromTime =  new Date(2000, 2, 2, selectedFromHour, selectedFromMinute, selectedFromSecond)
    const selectedToTime =  new Date(2000, 2, 2, selectedToHour, selectedToMinute, selectedToSecond)

    //
    const valueDateTime = new Date(valueYear, valueMonth, valueDate)
    const valueString = valueDate && valueMonth && valueYear ? formatDate(valueDateTime) : ''
    const valueObj = {
        year: valueYear,
        month: valueMonth,
        date: valueDate,
    }
    const timeObj: ITimeValue = {
        hour: valueHour,
        minute: valueMinute,
        second: valueSecond,
    }
    const fromTimeObj: ITimeValue = {
        hour: valueFromHour,
        minute: valueFromMinute,
        second: valueFromSecond,
    }

    const toTimeObj: ITimeValue = {
        hour: valueToHour,
        minute: valueToMinute,
        second: valueToSecond,
    }
    // console.log('value ', valueObj, timeObj, fromTimeObj, toTimeObj)
    const dateList = getDateList(selectedDateTime, selectedMonth, selectedYear, valueObj, minDate, maxDate);
    const timeList = getTimeList(timeType, timeObj, minTime, maxTime)    
    const fromTimeList = getTimeList(timeType, fromTimeObj, minTime, maxTime)    
    const toTimeList = getTimeList(timeType, toTimeObj, minTime, maxTime)    
    const result = {
        state: {
            fromTimeList,
            toTimeList,
            timeList,
            dateList,
            selectedDateTime,
            valueDateTime,
            valueString,
            value: {
                year: valueYear,
                month: valueMonth,
                date: valueDate,
                hour: valueHour,
                minute: valueMinute,
                second: valueSecond,
                fromHour: valueFromHour,
                fromMinute: valueFromMinute,
                fromSecond: valueFromSecond,
                toHour: valueToHour,
                toMinute: valueToMinute,
                toSecond: valueToSecond,
            } as DatePickerValue,
            selectedYear,
            selectedMonth,
            selectedDate,
            status,
        },
        label: {
            fromTimeLabel,
            toTimeLabel,
            timeLabel
        },
        action: {
            selectFromTime,
            selectToTime,
            selectDate,
            selectTime,
            showDatePicker,
            hideDatePicker,
            previousMonth,
            nextMonth,
            updateSelectedYear,
            updateSelectedMonth,
            updateSelectedDate,
        }
    }
    return _.cloneDeep(result)
}

export default useDatePicker
