import CardContainer from "./CardsContainer";
import "./styles.css";
export const Body = ({ data, setData }) => {
  const editStatus = (id, value) => {

    fetch(`http://localhost:3001/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ status: value }),
    })
      .then(res => res.json())
      .then((data) =>
        setData((task) =>
          task.map((task) => {
            if (task._id === id) {
              return data;
            }
            return task;
          })
        )
      );
  };
  const editTask = (id, title, description, onClose) => {
    console.log(id);
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
    })
      .then((res) => res.json())
      .then((data) =>
        setData((task) =>
          task.map((task) => {
            if (task._id === id) {
              return data;
            }
            return task;
          })
        )
      );
    onClose();
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
              editStatus={editStatus}
            />
          );
        })}
      </div>
    </div>
  );
};
