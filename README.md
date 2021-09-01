# Custom React Date Picker With Hooks

### _One line of code worths thousands lines of explanations._

```
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
```

```
import React from 'react'
import styles from './styles.module.scss'
import { DatePickerType } from 'custom-react-dp'
interface Props {
    data: DatePickerType
}
const Input: React.FC<Props> = ({
    data
}) => {
    const {
        state: {
            valueString
        },
        action: {
        showDatePicker
    } } = data    
    const onFocus = () => {
        showDatePicker()
    }
    const onChange = () => {
        
    }
    return <div className={styles.container}>
    <input onChange={onChange} value={valueString} type="text" onFocus={onFocus} />
</div>
}

export default Input
```