import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTaskThunk } from "../../redux/actions/task-actions";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const ConnectedProject = ({ getTask }) => {
  const [queryObject, setQueryObject] = useState({});
  const generateQuery = (filterObject) => {
    // [['sort','created_at'] ,['search','barev']]]
    return Object.entries(filterObject).reduce((query, [field, value]) => {
      query += `${field}=${value}&`;
      return query;
    }, "");
  };

  useEffect(() => {
    const query = generateQuery(queryObject);
    getTask(query);
  }, [queryObject]);
  const setFilteredField = useCallback((filterEntries) => {
    const [name, value] = filterEntries;
    console.log(filterEntries);
    setQueryObject((prev) => {
      if (!value) {
        const newQueryObject = { ...prev };
        delete newQueryObject[name];
        return newQueryObject;
      }
      if (prev[name] !== value) {
        return {
          ...prev,
          [name]: value,
        };
      }
      return prev;
    }, []);
  });
  return (
    <div className="project-layout">
      <FilterSection setFilteredField={setFilteredField} />
      <MainSection />
    </div>
  );
};
export const Project = connect(null, {
  getTask: getTaskThunk,
})(ConnectedProject);
