import React, { useState, useCallback } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePick from "../Datepick";
import "./styles.css";
import * as moment from "moment";


export const FilterSection = ({ setFilteredField }) => {
  const Filter_Date_Pickers = [
    { label: "Created Later", value: 'create_lte' },
    { label: "Created Greater", value: 'create_gte' },
    { label: "Completed Later", value: 'complete_lte' },
    { label: "Completed Greater", value: 'complete_gte' }
  ]
  const [createdLte] = useState(new Date())
  const [createdGte] = useState(new Date())
  const [completedLte] = useState(new Date())
  const [completedGte] = useState(new Date())
  const getFilterState = useCallback(
    (name) => {
      switch (name) {
        case "create_lte":
          return createdLte;
        case "create_gte":
          return createdGte;
        case "complete_lte":
          return completedLte;
        case "complete_gte":
          return completedGte;
        default:
          return null;
      }
    },
    [createdLte, createdGte, completedLte, completedGte]
  );
  return (
    <div className="filter-section">
 
    </div>
  );
};
