import React  from 'react'
import TableContent from './TableContent'
import TableHeader from './TableHeader'
import styles from './styles.module.scss'
import { DatePickerType } from '../../interface'
import Header from './Header'
interface Props {
    data: DatePickerType
}
const Main: React.FC<Props> = ({
    data
}) => {
    return <div className={styles.container}>
        <Header data={data} />
        <TableHeader />
        <TableContent data={data}/>
    </div>
}

export default Main