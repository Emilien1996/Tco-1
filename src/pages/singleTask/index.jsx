import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const SingleTask = () => {
  const [singleTask, setSingleTask] = useState();
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
  return (
    <div className="singleTask">
      <div className="task_btn_container">
        <button className="task_btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="task_info_container">
        <p>{singleTask.created_at}</p>
        <p>{singleTask.title}</p>
        <p>{singleTask.description}</p>
      </div>
    </div>
  );
};
export default SingleTask;
