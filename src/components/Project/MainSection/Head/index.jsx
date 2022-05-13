import ModalButton from "./Modal";
import SearchForm from "./SearcForm";
import SortButton from "./SortButton";
import "./styles.css";
export const Head = () => {
  return (
    <div className="main-section-head">
      <div>
        <SearchForm />
        <SortButton />
      </div>
      <div>
        <ModalButton />
      </div>
    </div>
  );
};
