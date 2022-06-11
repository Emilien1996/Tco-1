import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import "./style.css";
const Contact = () => {
  const [contactInputs, setContactInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const ContactFormHandler = (e) => {
    const { value } = e.target;
    setContactInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };
  console.log(contactInputs);
  const ContactSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name: contactInputs.name,
      email: contactInputs.email,
      message: contactInputs.message,
    };
    e.preventDefault();
    fetch("http://localhost:3001/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
  };

  return (
    <div className="contact_form">
      <Form inline onSubmit={ContactSubmit}>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="name"
            placeholder="Email"
            type="text"
            onChange={ContactFormHandler}
          />
          <Label for="exampleEmail">Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="email"
            placeholder="Password"
            type="email"
            onChange={ContactFormHandler}
          />
          <Label for="examplePassword">Email</Label>
        </FormGroup>
        <FormGroup floating>
          <Label for="exampleText" sm={2}></Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="message"
              type="textarea"
              onChange={ContactFormHandler}
            />
          </Col>
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form>
    </div>
  );
};
export default Contact;
