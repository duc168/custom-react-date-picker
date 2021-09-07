import { DateItemStatusType, DatePickerType, IDateItem } from "../../../interface";
import React from "react";
import styles from "./styles.module.scss";
interface Props {
  data: DatePickerType;  
}
const TableContent: React.FC<Props> = ({ data }) => {
  const {
    state: { dateList },
    action: { selectDate: select },
  } = data;
  const getStyles = (status: DateItemStatusType) => {
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
  const onClick = (item: IDateItem) => {
    const selectedDate = item.text;
    if (item.status === 'show') {
      select(selectedDate);
    }
  };
  return (
    <div className={styles.container}>
      {dateList.map((d) => {
        return (
          <div
            key={d.id}
            className={`${styles.item} ${getStyles(d.status)}`}
            onClick={() => onClick(d)}
          >
            <div className={styles.textContainer}>
              <div className={styles.text}>{d.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TableContent;
