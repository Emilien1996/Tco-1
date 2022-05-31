import React, { useState, useCallback } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";


export const FilterSection = ({ setFilteredField }) => {
  const Filter_Date_Pickers = [
    { label: "Created Later", value: 'create_lte' },
    { label: "Created Greater", value: 'create_gte' },
    { label: "Completed Later", value: 'complete_lte' },
    { label: "Completed Greater", value: 'complete_gte' }
  ]
  const [createdLte] = useState(new Date())
  const [createGte] = useState(new Date())
  const [completeLte] = useState(new Date())
  const [completeGte] = useState(new Date())
  const getFilterState = useCallback((name) => {
    switch (name) {
      case 'create_lte':
        return createdLte
      case "createGte":
        return createGte
      case 'complete_lte':
        return completeLte
      case 'complete_gte':
        return completeGte
    }
  }, [createdLte, createGte, completeLte, completeGte])

  return (
    <div className="filter-section">


    </div>
  );
};
