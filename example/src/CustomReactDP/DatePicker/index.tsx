import React, { useEffect } from 'react'
import Header from './Header'
import { DatePickerType } from './interface'
import Main from './Main'
import styles from './styles.module.scss'
interface Props {
    data: DatePickerType
}
const DatePicker: React.FC<Props> = ({
    data
}) => {
    const {
        state: {
            status
        },
        action: {
            updateSelectedYear,
            updateSelectedMonth
        }
     } = data
    useEffect(() => {
        updateSelectedYear(new Date().getFullYear())
        updateSelectedMonth(new Date().getMonth())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <div className={`${styles.container} ${status ? styles.show : styles.hide}`}>
        <Header data={data} />
        <Main data={data} />
    </div>
}

export default DatePicker