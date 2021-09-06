import React from 'react'
import styles from './styles.module.scss'
import { DatePickerType } from 'custom-react-dp'
// import { DatePickerType } from 'CustomReactDP'
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