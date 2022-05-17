import { FormGroup, Input, Label } from "reactstrap";
import "./styles.css";
export const FilterSection = () => {
  return (
    <div className="filter-section">
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
    </div>
  );
};
