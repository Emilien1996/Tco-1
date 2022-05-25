import { FormGroup, Input, Label } from "reactstrap";

const SortButton = ({ handleSort }) => {
  return (
    <FormGroup>
      <Label for="exampleSelect">Sort</Label>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
        onChange={handleSort}
      >
        <option>Creation date</option>
        <option>Status</option>
        <option>A-Z</option>
      </Input>
    </FormGroup>
  );
};
export default SortButton;
