import React, { Fragment } from 'react'
import styles from './styles.module.scss'
import Date from './Date'
import Time from './Time'
import FromTime from './FromTime'
import ToTime from './ToTime'
import { DatePickerType } from '../interface'
interface Props {
    data: DatePickerType
    pickDate?: boolean
    pickTime?: boolean
    pickTimeRange?: boolean
}
const MainContainer: React.FC<Props> = ({
    data,
    pickDate = true,
    pickTime = false,
    pickTimeRange = false
}) => {
    return <div className={styles.container}>
            {pickDate && <Date data={data} />}
            {pickTime && <Time data={data} />}
            {pickTimeRange && <Fragment>
            <FromTime data={data} />
            <ToTime data={data} />
            </Fragment>}
    </div>
}

export default MainContainer