import { useEffect, useState } from 'react'
import { formatDate, getDateList } from '../helpers'

const useDatePicker = () => {
    const [status, setStatus] = useState(false)
    const [selectedYear, setSelectedYear] = useState<number>(0)
    const [selectedMonth, setSelectedMonth] = useState<number>(0)
    const [selectedDate, setSelectedDate] = useState<number>(0)

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
    const nextMonth = () => {
        const currentMonth = selectedMonth
        const currentYear = selectedYear
        if (currentMonth >= 0 && currentMonth < 11) {
            setSelectedMonth(currentMonth + 1)
        }
        if (currentMonth === 11) {
            setSelectedMonth(0)
            setSelectedYear(currentYear + 1)
        }
        const yearCheck = selectedYear === valueYear
        const monthCheck = selectedMonth === valueMonth
        if (yearCheck && monthCheck) {
            setSelectedDate(valueDate)
        } else {
            setSelectedDate(0)
        }

    }
    const previousMonth = () => {
        const currentMonth = selectedMonth
        const currentYear = selectedYear
        if (currentMonth > 0 && currentMonth <= 11) {
            setSelectedMonth(currentMonth - 1)
        }
        if (currentMonth === 0) {
            setSelectedMonth(11)
            setSelectedYear(currentYear - 1)
        }
        const yearCheck = selectedYear === valueYear
        const monthCheck = selectedMonth === valueMonth
        if (yearCheck && monthCheck) {
            setSelectedDate(valueDate)
        } else {
            setSelectedDate(0)
        }
    }
    const selectedDateTime =  new Date(selectedYear, selectedMonth, selectedDate === 0 ? 1 : selectedDate)
    const valueDateTime = new Date(valueYear, valueMonth, valueDate)
    const valueString = valueDate && valueMonth && valueYear ? formatDate(valueDateTime) : ''
    const valueObj = {
        year: valueYear,
        month: valueMonth,
        date: valueDate,
    }
    const dateList = getDateList(selectedDateTime, selectedMonth, selectedYear, valueObj);
    return {
        state: {
            dateList,
            selectedDateTime,
            valueDateTime,
            valueString,
            value: {
                year: valueYear,
                month: valueMonth,
                date: valueDate,
            },
            selectedYear,
            selectedMonth,
            selectedDate,
            status,
        },
        action: {
            selectDate,
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
