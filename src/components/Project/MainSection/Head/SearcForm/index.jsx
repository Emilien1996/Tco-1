import { useContext, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { TaskContext } from "../..";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const { SetTasks } = useContext(TaskContext);
  const searcHandler = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    fetch(`http://localhost:3001/task?search=${searchValue}`)
      .then((res) => res.json())
      .then((data) => SetTasks(data));
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="SearchTask">Search</Label>
          <Input
            value={searchValue}
            onChange={searcHandler}
            id="SearchTask"
            name="Search"
            placeholder="....."
            type="text"
          />
        </FormGroup>
      </Form>
    </div>
  );
};
export default SearchForm;
