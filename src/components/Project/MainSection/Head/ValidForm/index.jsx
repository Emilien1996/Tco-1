import { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { addNewTaskThunk } from "../../../../../redux/actions/task-actions";
import {
  isRequired,
  maxLength20,
  minLength3,
} from "../../../../../validation/validation";

const ConnectedAddTaskForm = ({ toggle, addNewTask }) => {
  const [InputsValue, setInputsValue] = useState({
    title: {
      value: "",
      error: "",
      validations: [isRequired, minLength3, maxLength20],
    },
    description: {
      value: "",
      error: "",
      validations: [isRequired, minLength3, maxLength20],
    },
  });
  const changeHandler = (e) => {
    let error;
    const { validations } = InputsValue[e.target.name];
    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errormessage = validation(e.target.value);
      if (errormessage) {
        error = errormessage;
        break;
      }
    }
    setInputsValue((prev) => {
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: e.target.value,
          error,
        },
      };
    });
  };
  const FormData = {
    title: InputsValue.title.value,
    description: InputsValue.description.value,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addNewTask(FormData, toggle);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input
          id="titleId"
          name="title"
          onChange={changeHandler}
          type="text"
          invalid={!!InputsValue.title.error}
          placeholder="insert Title"
        />
        {InputsValue.title.error && (
          <FormFeedback>Error please check the value</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="DiscriptionId">Description</Label>
        <Input
          name="description"
          onChange={changeHandler}
          type="text"
          invalid={!!InputsValue.description.error}
          placeholder="insert Discription"
        />
        {InputsValue.description.error && (
          <FormFeedback>Error please enter the value</FormFeedback>
        )}
      </FormGroup>
      <Button color="primary" onClick={onSubmit}>
        Add Task
      </Button>{" "}
      <Button onClick={toggle}>Cancel</Button>
    </Form>
  );
};
export default AddTaskForm = connect(null, {
  addNewTask: addNewTaskThunk,
})(ConnectedAddTaskForm);
