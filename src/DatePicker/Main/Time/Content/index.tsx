import React from 'react'
import styles from '../../timeContent.module.scss'
import { DatePickerType, ITimeItem, TimeItemStatusType } from '../../../interface'
interface Props {
    data: DatePickerType
}
const Content: React.FC<Props> = ({ data }) => {
    const { state: {
        timeList
    }, 
    action: { selectTime: select }, } = data
    const getStyles = (status: TimeItemStatusType) => {
        switch (status) {
          case "disable":
            return styles.disabled;
          case "hide":
            return styles.hide;
          case "show":
            return styles.show;
          case "selected":
            return styles.selected;
          default:
            return styles.hide;
        }
      };
    const onClick = (item: ITimeItem) => {
        if (item.status === 'show') {
            select(item);
          }
    }
    return <div className={styles.container}>
            {timeList.map(t => {
                return <div 
                className={`${styles.item} ${getStyles(t.status)}`}
                key={t.id} onClick={() => onClick(t)}>{t.text}</div>
            })}
    </div>
}

export default Content