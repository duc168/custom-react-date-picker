import { addDays, addMonths, differenceInMonths, setHours, setMinutes, setSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import { formatDate, getDateList, getTimeList } from '../helpers'
import { ITimeItem, ITimeValue, IUseDatePicker } from '../interface'

const useDatePicker = ({ 
    minDate = addDays(new Date(), -1),
    maxDate = new Date(2021, 11, 1),
    minTime = setSeconds(setMinutes(setHours(new Date(), 8), 0), 0),
    maxTime = setSeconds(setMinutes(setHours(new Date(), 16), 0), 0),
    fromTimeLabel,
    toTimeLabel,
    timeLabel,
    timeType = 24
 }: IUseDatePicker) => {
    const [status, setStatus] = useState(false)
    const [selectedYear, setSelectedYear] = useState<number>(0)
    const [selectedMonth, setSelectedMonth] = useState<number>(0)
    const [selectedDate, setSelectedDate] = useState<number>(0)

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

    useEffect(() => {
        const now = new Date() 
        const currentYear = now.getFullYear()
        const currentMonth = now.getMonth()
        const currentDate = now.getDate()
        setSelectedYear(currentYear)
        setSelectedMonth(currentMonth)
        setSelectedDate(currentDate)
    }, [])

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

    const selectDate = (dateInput: string) => {
        const datePayload = parseInt(dateInput, 10)
        setSelectedDate(datePayload)
        setValueDate(datePayload)
        setValueMonth(selectedMonth)
        setValueYear(selectedYear)
    }
    const selectTime = (timeItem: ITimeItem) => {
        setValueHour(timeItem.hour)
        setValueMinute(timeItem.minute)
        setValueSecond(0)
    }

    const selectFromTime = (timeItem: ITimeItem) => {
        setValueFromHour(timeItem.hour)
        setValueFromMinute(timeItem.minute)
        setValueFromSecond(0)
    }

    const selectToTime = (timeItem: ITimeItem) => {
        setValueToHour(timeItem.hour)
        setValueToMinute(timeItem.minute)
        setValueToSecond(0)
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
    const selectedDateTime =  new Date(selectedYear, selectedMonth, selectedDate === 0 ? 1 : selectedDate)
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
    return {
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
            },
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
}

export default useDatePicker
