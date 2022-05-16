import { useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const AddTaskForm = ({ toggle, addTask }) => {
  const [InputsValue, setInputsValue] = useState({
    title: {
      value: "",
      error: "",
    },
    description: {
      value: "",
      error: "",
    },
  });
  const changeHandler = (e) => {
    setInputsValue((prev) => {
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: e.target.value,
          error: "",
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
    const optionsHeader = {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(FormData),
    };

    fetch("http://localhost:3001/task", optionsHeader)
      .then((res) => res.json())
      .then(
        (data) =>
          addTask((prev) => {
            return [...prev, data];
          }),
        toggle()
      );
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
          invalid
          placeholder="insert Title"
        />
        <FormFeedback>Error please check the value</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="DiscriptionId">Description</Label>
        <Input
          name="description"
          onChange={changeHandler}
          type="text"
          invalid
          placeholder="insert Discription"
        />
        <FormFeedback>Error please enter the value</FormFeedback>
      </FormGroup>
      <Button color="primary" onClick={onSubmit}>
        Add Task
      </Button>{" "}
      <Button onClick={toggle}>Cancel</Button>
    </Form>
  );
};
export default AddTaskForm;
