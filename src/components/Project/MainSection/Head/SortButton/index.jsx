import { FormGroup, Input, Label } from "reactstrap";
import { TaskContext } from "../..";
import { useContext } from "react";


const SortButton = () => {
  const { SetTasks } = useContext(TaskContext);
  const changehandler = (e) => {
    const { value } = e.target
    fetch(`http://localhost:3001/task?sort=${value}`)
      .then(res => res.json())
      .then(data => SetTasks(data))
  }
  return (
    <FormGroup>
      <Label for="exampleSelect">Sort</Label>
      <Input id="exampleSelect" name="select" type="select" onChange={changehandler}>
        <option value="creation_date_newest">Creation newest</option>
        <option value='creation_date_oldest'>Created oldest</option>
        <option >newest</option>
        <option>oldest</option>
        <option value='a-z'>A-Z</option>
        <option value='z-a'>Z-A</option>
      </Input>
    </FormGroup>
  );
};
export default SortButton;
