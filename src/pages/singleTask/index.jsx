import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const SingleTask = () => {
  const [singleTask, setSingleTask] = useState();
  const [editable, setEditable] = useState(false);
  const isEditable = () => {
    setEditable((prev) => !prev);
  };
  const editHandler = (e) => {
    const { value } = e.target;
    setSingleTask((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  console.log(singleTask);
  const params = useParams();
  const taskId = params.taskId;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3001/task/${taskId}`)
      .then((res) => res.json())
      .then((data) => setSingleTask(data));
  }, [taskId]);
  if (!singleTask) {
    return <h1>...Loading</h1>;
  }
  const onBlur = () => {
    fetch(`http://localhost:3001/task/${singleTask._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        title: singleTask.title,
        description: singleTask.description,
      }),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
    isEditable();
  };
  return (
    <div className="singleTask">
      <div className="task_btn_container">
        <button className="task_btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="task_info_container">
        {editable ? (
          <input
            type="text"
            value={singleTask.title}
            onChange={editHandler}
            name="title"
          />
        ) : (
          <p onClick={() => isEditable()} onBlur={onBlur}>
            {singleTask.title}
          </p>
        )}
        {editable ? (
          <input
            type="text"
            value={singleTask.description}
            onChange={editHandler}
            name="description"
          />
        ) : (
          <p onClick={() => isEditable()} onBlur={onBlur}>
            {singleTask.description}
          </p>
        )}
      </div>
    </div>
  );
};
export default SingleTask;
