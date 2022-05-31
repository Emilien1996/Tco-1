import { useContext } from "react";
import { TaskContext } from "../..";
import ModalButton from "./Modal";
import SearchForm from "./SearcForm";
import SortButton from "./SortButton";
import "./styles.css";
export const Head = () => {
  const { setFilteredField } = useContext(TaskContext);
  const handleSort = (e) => {
    const { value } = e.target
    setFilteredField(["sort", value]);
  };
  const handleSearch = (e) => {
    const { value } = e.target
    console.log(value)
    setFilteredField(["search", value]);
  };
  return (
    <div className="main-section-head">
      <div>
        <SearchForm handleSearch={handleSearch} />
        <SortButton handleSort={handleSort} />
      </div>
      <div>
        <ModalButton />
      </div>
    </div>
  );
};
