import { DatePickerType } from '../../../interface'
import React from 'react'
import styles from './styles.module.scss'
interface Props {
  data: DatePickerType
}
const Header: React.FC<Props> = ({
  data
}) => {
    return <div className={styles.container}>
      {data.label.toTimeLabel ?? 'Select Time'}
    </div>
}

export default Header