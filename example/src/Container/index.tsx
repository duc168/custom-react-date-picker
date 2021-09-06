import React, { useEffect, useRef } from 'react'
// import DatePicker from 'custom-react-dp'
// import { useDatePicker } from 'custom-react-dp'
import DatePicker, { DatePickerValue } from 'CustomReactDP'
import { useDatePicker } from 'CustomReactDP'
import useOnClickOutside from 'hooks/useOnClickOutside'
import Input from './Input'
import styles from './styles.module.scss'
const Container: React.FC<any> = () => {
    const containerRef = useRef(null)
    const datePickerData = useDatePicker({
        fromTimeLabel: 'Check-in',
        timeLabel: 'Time',
        toTimeLabel: 'Check-out',
        timeType: 12
    })
    const { 
        action: {
        hideDatePicker,
    } } = datePickerData
    useOnClickOutside(containerRef, () => {
        hideDatePicker()
    })
    const onChange = (value: DatePickerValue) => {
        console.log('on change value', value)
    }
    return <div className={styles.container} ref={containerRef}>
        <Input data={datePickerData} />
        <DatePicker 
        data={datePickerData} 
        pickTimeRange={true}
        onChange={onChange}
         />
    </div>
}

export default Container