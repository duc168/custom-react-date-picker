import React, { useEffect, useRef } from 'react'
import DatePicker from 'custom-react-dp'
import { useDatePicker } from 'custom-react-dp'
import useOnClickOutside from 'hooks/useOnClickOutside'
import Input from './Input'
import styles from './styles.module.scss'
const Container: React.FC<any> = () => {
    const containerRef = useRef(null)
    const datePickerData = useDatePicker()
    const { 
        state: {
            value
        },
        action: {
        hideDatePicker,
    } } = datePickerData
    useOnClickOutside(containerRef, () => {
        hideDatePicker()
    })
    useEffect(() => {
        console.log('value change', value)
    }, [value])
    return <div className={styles.container} ref={containerRef}>
        <Input data={datePickerData} />
        <DatePicker 
        data={datePickerData} 
         />
    </div>
}

export default Container