import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { removeMultipleTaskThunk } from "../../../../redux/actions/task-actions";
import CardContainer from "./CardsContainer";
import "./styles.css";
const ConnectedBody = ({ data, removeMultipleTasks }) => {
  const [deletedTaskSet, setdeletedTaskSet] = useState(new Set());
  const toggleDeletedTask = (id) => {
    setdeletedTaskSet((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  const deleteTaskBatch = () => {
    const banchDeleted = Array.from(deletedTaskSet);
    removeMultipleTasks(banchDeleted);
  };
  const editStatus = (id, value) => {

  };
  const editTask = (id, title, description, onClose) => {


  };
  const onRemoveTask = (id) => {

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
const mapStateToProps = (state) => {
  tasks: state.taskReducerState.tasks;
};
const mapDispatchToProps = (dispatch) => {
  removeMultipleTask: (deletedTasksIds) => {
    dispatch(removeMultipleTaskThunk(deletedTasksIds));
  };
};
export const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody);
