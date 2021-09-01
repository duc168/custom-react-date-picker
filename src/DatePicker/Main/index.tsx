import React  from 'react'
import TableContent from './TableContent'
import TableHeader from './TableHeader'
import styles from './styles.module.scss'
import { DatePickerType } from '../interface'
interface Props {
    data: DatePickerType
}
const Main: React.FC<Props> = ({
    data
}) => {
    return <div className={styles.container}>
        <TableHeader />
        <TableContent data={data}/>
    </div>
}

export default Main