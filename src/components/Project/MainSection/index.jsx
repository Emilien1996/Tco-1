
import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";

export const MainSection = ({ Tasks, SetTasks }) => {
  return (
    <div className="main-section">
      <Head />
      <Body data={Tasks} setData={SetTasks} />
    </div>
  );
};
