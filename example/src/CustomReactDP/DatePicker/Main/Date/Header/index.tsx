import React  from 'react'
import { getMonthYearText } from '../../../helpers'
import styles from './styles.module.scss'
import { ReactComponent as LeftArrowIcon } from '../../../assets/left-arrow.svg'
import { ReactComponent as  RightArrowIcon } from '../../../assets/right-arrow.svg'
// import LeftArrowIcon from '../../../assets/left-arrow.svg'
// import RightArrowIcon from '../../../assets/right-arrow.svg'
import { DatePickerType } from '../../../interface'
interface Props {
    data: DatePickerType
}
const Header: React.FC<Props> = ({
    data
}) => {
    const { state: {
        selectedDateTime
    }, action: {
        previousMonth,
        nextMonth
    } } = data
    const monthYearString = getMonthYearText(selectedDateTime)
    const goToPreviousMonth = () => {
        previousMonth()
    }
    const goToNextMonth = () => {
        nextMonth()
    }
    return <div className={styles.container}>
        <div className={styles.leftArrow}>
            <button className={styles.button} onClick={goToPreviousMonth}>
                <LeftArrowIcon />
            </button>
        </div>
        <div className={styles.text}>
        {monthYearString}
        </div>
        <div className={styles.rightArrow}>
            <button className={styles.button} onClick={goToNextMonth}>
                <RightArrowIcon />
            </button>
        </div>
    </div>
}

export default Header