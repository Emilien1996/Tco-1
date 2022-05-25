import { Form, FormGroup, Input, Label } from "reactstrap";

const SearchForm = ({ handleSearch }) => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="SearchTask">Search</Label>
          <Input
            onChange={handleSearch}
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
