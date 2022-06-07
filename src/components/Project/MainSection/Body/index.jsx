import { useState } from "react";
import { Button } from "reactstrap";
import CardContainer from "./CardsContainer";
import "./styles.css";
export const Body = ({ data, setData }) => {
  const [deletedTaskSet, setdeletedTaskSet] = useState(new Set())
  const toggleDeletedTask = (id) => {

    setdeletedTaskSet(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }
  const deleteTaskBatch = () => {
    const banchDeleted = Array.from(deletedTaskSet)
    fetch(`http://localhost:3001/task/`, {
      method: "PATCH",
      body: JSON.stringify({
        tasks: banchDeleted,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(prev => {
          return prev.filter(task => !banchDeleted.includes(task._id))
        })
        setdeletedTaskSet(new Set())
      })
  }
  const editStatus = (id, value) => {
    fetch(`http://localhost:3001/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ status: value }),
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
        <Button onClick={deleteTaskBatch}>delete</Button>
        {data.map((task, i) => {
          return (
            <CardContainer
              {...task}
              key={i}
              onRemove={onRemoveTask}
              onEdit={editTask}
              editStatus={editStatus}
              toggleDeletedTask={toggleDeletedTask}
              isChecked={deletedTaskSet.has(task._id)}
            />
          );
        })}
      </div>
    </div>
  );
};
