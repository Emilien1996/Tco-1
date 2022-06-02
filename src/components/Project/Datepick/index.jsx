import DatePicker from "react-datepicker";

import React, { memo } from "react";
const DatePick = ({ startDate, setStartDate, name }) => {
 
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date, name)}
    />
  );
};
export default memo(DatePick);
