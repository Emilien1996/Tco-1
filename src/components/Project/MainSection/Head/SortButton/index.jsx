import { FormGroup, Input, Label } from "reactstrap";

const SortButton = () => {
  return (
    <FormGroup>
      <Label for="exampleSelect">Select</Label>
      <Input id="exampleSelect" name="select" type="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
  );
};
export default SortButton;
