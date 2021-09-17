# Custom React Date Picker With Hooks

### _One line of code worths thousands lines of explanations._

```typescript
import React, { useEffect, useRef } from 'react'
import DatePicker, { DatePickerValue } from 'custom-react-dp'
import { useDatePicker } from 'custom-react-dp'
import useOnClickOutside from 'hooks/useOnClickOutside'
import Input from './Input'
import styles from './styles.module.scss'
const Container: React.FC<any> = () => {
    const containerRef = useRef(null)
    const datePickerData = useDatePicker({
        fromTimeLabel: 'Check-in',
        timeLabel: 'Time',
        toTimeLabel: 'Check-out',
        timeType: 12,
        minDate: new Date(),
        maxDate: new Date(3000, 3, 3),
        onSelectDate: (data) => {
            const { date, month, year } = data
            const currentDate = new Date(year, month, date)
            const changed = getDateTimeModel(currentDate)
            console.log('changed', changed)
            if (changed) {
                // do something here
            }
        },  
    })
    const { 
        action: {
        hideDatePicker,
    } } = datePickerData
    useOnClickOutside(containerRef, () => {
        hideDatePicker()
    })
    return <div className={styles.container} ref={containerRef}>
        <Input data={datePickerData} />
        <DatePicker 
        data={datePickerData} 
        pickTimeRange={true}
         />
    </div>
}

export default Container
```

```typescript
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
