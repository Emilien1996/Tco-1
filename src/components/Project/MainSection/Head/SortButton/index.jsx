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
        <option value={"creation_date_oldest"}>Creation date oldest</option>
        <option value={"z-a"}>Z-A</option>
        <option value={"a-z"}>A-Z</option>
        <option value={'creation_date_newest'}>Creation date newest</option>
      </Input>
    </FormGroup>
  );
};
export default SortButton;
