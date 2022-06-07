import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import './style.css'
const Contact = () => {

  return (
    <div className="contact_form">
      <Form inline >
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="exampleEmail">
            Name
          </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="email"
            placeholder="Password"
            type="email"
          />
          <Label for="examplePassword">
            Email
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Label
            for="exampleText"
            sm={2}
          >
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name=""
              type="textarea"
            />
          </Col>
        </FormGroup>
        {' '}

        <Button>
          Submit
        </Button>
      </Form >
    </div >

  );
};
export default Contact;
