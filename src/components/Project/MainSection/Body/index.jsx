import { useState } from "react";
import CardContainer from "./CardsContainer";
import "./styles.css";
export const Body = ({ data, setData }) => {
  const [editvalue, setedit] = useState(false);
  const editTask = (id, title, description) => {
    debugger;
    const formData = {
      title,
      description,
    };
    fetch(`http://localhost:3001/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });
    setedit((prev) => prev);
  };
  const onRemoveTask = (id) => {
    fetch(`http://localhost:3001/task/${id}`, {
      method: "DELETE",
    }).then(() =>
      setData(
        data.filter((task) => {
          return task._id !== id;
        })
      )
    );
  };
  return (
    <div className="main-section-body">
      <div className="card-wrapper">
        {data.map((task, i) => {
          return (
            <CardContainer
              {...task}
              key={i}
              onRemove={onRemoveTask}
              onEdit={editTask}
              editbutton={editvalue}
              setedit={setedit}
            />
          );
        })}
      </div>
    </div>
  );
};
