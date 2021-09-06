import { DAY_FORMAT_2_LETTERS } from '../../../config'
import React from 'react'
import styles from './styles.module.scss'

const TableHeader: React.FC<any> = () => {
    
    return <div className={styles.container}>
        {DAY_FORMAT_2_LETTERS.map(d => {
            return <div key={d} className={styles.dayName}>
        {d}
                </div>
        })}
    </div>
}

export default TableHeader