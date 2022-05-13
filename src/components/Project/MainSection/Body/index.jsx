import CardContainer from "./CardsContainer";
import "./styles.css";
export const Body = () => {
  return (
    <div className="main-section-body">
      <div className="card-wrapper">
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </div>
    </div>
  );
};
