import { IDateItem, IDateValue } from '../interface';
import { MONTH_FORMAT } from '../config';
export const generateId = () => {
    return Math.random() * 1000000 + ''
}

export const getMonthText = (currentValue: Date) => {
    const currentMonth = currentValue.getMonth()
    return MONTH_FORMAT[currentMonth]
}

export const getMonthYearText  = (currentValue: Date) => {
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


export const getDateListFromNumberOfDayInAMonth = (numberOfDayInAMonth: number, selectedMonth: number, selectedYear: number, actualValue: IDateValue): IDateItem[] => {    
    const sameYear = selectedYear === actualValue.year
    const sameMonth = selectedMonth === actualValue.month
    return Array.from(Array(numberOfDayInAMonth + 1).keys()).filter(d => d >= 1).map(d => ({
        id: generateId(),
        text: d + '',
        status: d === actualValue.date && sameMonth && sameYear ? 'selected' : 'show'
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

export const getDateList = (selectedDate: Date, selectedMonth: number, selectedYear: number, actualValue: IDateValue) => {  
    const lastMonthLists = getLastMonthDateList(selectedDate)
    return [
        ...lastMonthLists,
        ...getDateListFromNumberOfDayInAMonth(getNumberOfDayInAMonth(selectedDate), selectedMonth, selectedYear, actualValue)
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