import React from 'react'
import styles from './styles.module.scss'
import Header from './Header'
import Content from './Content'
import { DatePickerType } from '../../interface'
interface Props {
    data: DatePickerType
}
const TimeContainer: React.FC<Props> = ({
    data
}) => {
    return <div className={styles.container}>
        <Header data={data} />
        <Content data={data} />
    </div>
}

export default TimeContainer