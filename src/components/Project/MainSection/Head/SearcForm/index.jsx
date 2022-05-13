import { Form, FormGroup, Input, Label } from "reactstrap";

const SearchForm = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Search</Label>
          <Input id="exampleEmail" name="email" placeholder="" type="email" />
        </FormGroup>
      </Form>
    </div>
  );
};
export default SearchForm;
