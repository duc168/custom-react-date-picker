import { IDateItem, IDateValue, ITimeItem, ITimeValue } from '../interface';
import { MONTH_FORMAT } from '../config';
import { differenceInMinutes } from 'date-fns';
export const generateId = () => {
    return Math.random() * 1000000 + ''
}

export const getMonthText = (currentValue: Date) => {
    const currentMonth = currentValue.getMonth()
    return MONTH_FORMAT[currentMonth]
}

export const getMonthYearText = (currentValue: Date) => {
    const currentMonth = getMonthText(currentValue)
    const currentYear = currentValue.getFullYear()
    return `${currentMonth} ${currentYear}`
}

export const getNumberOfDayInAMonth = (selectedDate: Date) => {
    const currentMonth = selectedDate.getMonth()
    const currentYear = selectedDate.getFullYear()
    const standard = 40
    const calculated = new Date(currentYear, currentMonth, standard).getDate()
    return standard - calculated

}

export const compareDateWithValue = (currentValue: Date, selectedValue: IDateValue) => {
    const currentDate = currentValue.getDate()
    const currentMonth = currentValue.getMonth()
    const currentYear = currentValue.getFullYear()
    const dateCheck = currentDate === selectedValue.date
    const monthCheck = currentMonth === selectedValue.month
    const yearCheck = currentYear === selectedValue.year
    return dateCheck && monthCheck && yearCheck
}


export const getDateListFromNumberOfDayInAMonth = (
    numberOfDayInAMonth: number,
    selectedMonth: number,
    selectedYear: number,
    actualValue: IDateValue,
    minDate: Date,
    maxDate: Date
): IDateItem[] => {
    const sameYear = selectedYear === actualValue.year
    const sameMonth = selectedMonth === actualValue.month
    const minYear = minDate.getFullYear()
    const minMonth = minDate.getMonth()
    const minDay = minDate.getDate()
    const maxYear = maxDate.getFullYear()
    const maxMonth = maxDate.getMonth()
    const maxDay = maxDate.getDate()
    const checkMinDisabled = minYear === selectedYear && minMonth === selectedMonth
    const checkMaxDisabled = maxYear === selectedYear && maxMonth === selectedMonth
    const statusSwitcher = (input: number) => {
        if (input === actualValue.date && sameMonth && sameYear) {
            return 'selected'
        }
        if (checkMinDisabled) {
            if (input < minDay) {
                return 'disable'
            }
        }
        if (checkMaxDisabled) {
            if (input > maxDay) {
                return 'disable'
            }
        }
        return 'show'
    }
    return Array.from(Array(numberOfDayInAMonth + 1).keys()).filter(d => d >= 1).map(d => ({
        id: generateId(),
        text: d + '',
        status: statusSwitcher(d)
    }))
}


export const getStartDayOfMonth = (currentValue: Date) => {
    const currentMonth = currentValue.getMonth()
    const currentYear = currentValue.getFullYear()
    const startDay = new Date(currentYear, currentMonth).getDay()
    return startDay
}

export const getLastMonthDateList = (currentValue: Date): IDateItem[] => {
    const startDayOfMonth = getStartDayOfMonth(currentValue)
    return Array.from(Array(startDayOfMonth).keys()).map(_ => ({
        id: generateId(),
        text: '',
        status: 'hide'
    }))
}

export const getDateList = (selectedDate: Date, selectedMonth: number, selectedYear: number, actualValue: IDateValue, minDate: Date, maxDate: Date) => {
    const lastMonthLists = getLastMonthDateList(selectedDate)
    return [
        ...lastMonthLists,
        ...getDateListFromNumberOfDayInAMonth(getNumberOfDayInAMonth(selectedDate), selectedMonth, selectedYear, actualValue, minDate, maxDate)
    ]
}


export const formatDate = (input: Date) => {
    const currentYear = input.getFullYear()
    const currentMonth = input.getMonth()
    const currentDate = input.getDate()
    const currentHour = input.getHours()
    const currentMinute = input.getMinutes()

    const formatTwoDigits = (inputNumber: number) => {
        return inputNumber < 10 ? '0' + inputNumber : inputNumber + ''
    }
    const outputYear = formatTwoDigits(currentYear)
    const outputMonth = formatTwoDigits(currentMonth + 1)
    const outputDate = formatTwoDigits(currentDate)
    const outputHour = formatTwoDigits(currentHour)
    const outputMinute = formatTwoDigits(currentMinute)
    return `${outputYear}/${outputMonth}/${outputDate} ${outputHour}:${outputMinute}`
}


export const getTimeList = (
    timeType: number, // 12 or 24
     actualValue: ITimeValue, minTime: Date, maxTime: Date): ITimeItem[] => {
    const getTwoDigital = (input: number) => {
        if (input < 10) {
            return '0' + input
        }
        return input + ''
    }
    const amPmFormat = (inputHour: number, inputMinute: number) => {
        const HH = inputHour > 12 ? inputHour - 12 : inputHour
        const mm = inputMinute
        const pmAm = inputHour > 12 ? 'PM' : 'AM'
        const result = `${getTwoDigital(HH)}:${getTwoDigital(mm)} ${pmAm}`
        return result
    }
    const minHour = minTime.getHours()
    const minMinute = minTime.getMinutes()
    // const minSecond = minTime.getSeconds()
    const maxHour = maxTime.getHours()
    const maxMinute = maxTime.getMinutes()
    // const maxSecond = maxTime.getSeconds()    
    const statusSwitcher = (inputHour: number, inputMinute: number) => {
        if (differenceInMinutes(
            new Date(2000, 1, 1, inputHour, inputMinute), 
            new Date(2000, 1, 1, minHour, minMinute)
            ) < 0) {
            return 'disable'
        }
        if (differenceInMinutes(
            new Date(2000, 1, 1, maxHour, maxMinute), 
            new Date(2000, 1, 1, inputHour, inputMinute)
            ) < 0) {
            return 'disable'
        }
        if (inputHour === actualValue.hour && inputMinute === actualValue.minute) {
            return 'selected'
        }
           
        return 'show'
    }
    let result: ITimeItem[] = []
    for (let idx = 0; idx < 24; idx++) {
        const hour = idx
        if (timeType === 24) {
            const minuteFull = 0

            const minuteHalf = 30
            result.push({
                id: generateId(),
                text: `${getTwoDigital(hour)}:${getTwoDigital(minuteFull)}`,
                status: statusSwitcher(hour, minuteFull),
                hour,
                minute: minuteFull
            })
            result.push({
                id: generateId(),
                text: `${getTwoDigital(hour)}:${getTwoDigital(minuteHalf)}`,
                status: statusSwitcher(hour, minuteHalf),
                hour,
                minute: minuteHalf
            })
        }
        if (timeType === 12) {
            const minuteFull = 0

            const minuteHalf = 30
            result.push({
                id: generateId(),
                text: amPmFormat(hour, minuteFull),
                status: statusSwitcher(hour, minuteFull),
                hour,
                minute: minuteFull
            })
            result.push({
                id: generateId(),
                text: amPmFormat(hour, minuteHalf),
                status: statusSwitcher(hour, minuteHalf),
                hour,
                minute: minuteHalf
            })
        }
        
    }
    return result
}