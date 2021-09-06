import React, { useEffect } from "react";
import { DatePickerType, DatePickerValue } from "./interface";
import Main from "./Main";
import styles from "./styles.module.scss";
interface Props {
  data: DatePickerType;
  pickDate?: boolean;
  pickTime?: boolean;
  pickTimeRange?: boolean;
  onChange?: (data: DatePickerValue) => void;
}
const DatePicker: React.FC<Props> = ({ data, onChange, ...props }) => {
  const {
    state: { status, value },
    action: { updateSelectedYear, updateSelectedMonth },
  } = data;
  useEffect(() => {
    updateSelectedYear(new Date().getFullYear());
    updateSelectedMonth(new Date().getMonth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    onChange && onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <div
      className={`${styles.container} ${status ? styles.show : styles.hide}`}
    >
      <Main data={data} {...props} />
    </div>
  );
};

export default DatePicker;
