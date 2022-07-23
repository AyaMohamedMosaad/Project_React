import React from "react";
import { Button, Form } from "react-bootstrap";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export  class MYForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.password) {
        passwordError = "invalid password";
      }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError ,passwordError});
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
        <>
        <div className="container">
         
<Form onSubmit={this.handleSubmit} style={{fontSize:20}}>
        <div >
            
        <Form.Label >Name</Form.Label>
        <Form.Control 
            className="text-center"
            name="name"
            placeholder="Pleaze Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
            style={{ fontSize: 16}}
           
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
        <Form.Label>Email</Form.Label>
        <Form.Control 
            name="email"
            className="text-center"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            style={{ fontSize: 16}}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password"
            name="password"
            className="text-center"
            style={{ fontSize: 16}}
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div >
        <Button className="mt-5" ariant="primary" type="submit">
    Submit
  </Button>
      </Form>
      </div>
        </>
    );
    
}
}






