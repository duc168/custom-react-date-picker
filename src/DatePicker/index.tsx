import React, { useEffect } from "react";
import { DatePickerType } from "./interface";
import Main from "./Main";
import styles from "./styles.module.scss";
interface Props {
  data: DatePickerType;
  pickDate?: boolean;
  pickTime?: boolean;
  pickTimeRange?: boolean;
}
const DatePicker: React.FC<Props> = ({ data, ...props }) => {
  const {
    state: { status },
    action: { updateSelectedYear, updateSelectedMonth },
  } = data;
  useEffect(() => {
    updateSelectedYear(new Date().getFullYear());
    updateSelectedMonth(new Date().getMonth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`${styles.container} ${status ? styles.show : styles.hide}`}
    >
      <Main data={data} {...props} />
    </div>
  );
};

export default DatePicker;
