import React from 'react'
import styles from './styles.module.scss'
import Date from './Date'
// import Time from './Time'
import FromTime from './FromTime'
import ToTime from './ToTime'
import { DatePickerType } from '../interface'
interface Props {
    data: DatePickerType
}
const MainContainer: React.FC<Props> = ({
    data
}) => {
    return <div className={styles.container}>
            <Date data={data} />
            {/* <Time data={data} /> */}
            <FromTime data={data} />
            <ToTime data={data} />
    </div>
}

export default MainContainer