import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const DatePic = ({ sortname }) => {
  const [startDate, setStartDate] = useState(new Date());

  return <DatePicker selected={startDate} />;
};
export const FilterSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="filter-section">
      create_lte
      <DatePic sortname="create_lte" />
      create_gte
      <DatePic sortname="create_gte" />
      complete_lte
      <DatePic sortname="complete_lte" />
      complete_gte
      <DatePic sortname="complete_gte" />
    </div>
  );
};
