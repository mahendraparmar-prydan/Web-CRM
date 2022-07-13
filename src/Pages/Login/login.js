import React from "react";
import { useState } from "react";
import images from "../../Utils/image";
import btn from "../../Components/Button/Custombtn.js";
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import Custombtn from "../../Components/Button/Custombtn.js";
import "../Login/login.css";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="container">
        <Navbar bg="tranparent">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={images.logo}
                style={{
                  width: "100px",
                }}
              />
            </Navbar.Brand>
            {/* <Custombtn buttonText={"Login"} /> */}
          </Container>
        </Navbar>
        <Row>
          <Col className=" col-md-6">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              style={{
                height: "300px",
                // width: "100%",
                padding: "20px",

                margin: "200px auto",
                // border: "1px solid grey",
              }}
            >
              <Row className="mb-3 text-center d-block">
                <Form.Group as={Col} md="4" className="mb-3">
                  <Form.Control
                    required
                    name="email"
                    type="Email"
                    placeholder="Email address"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Control
                    required
                    name="password"
                    type="Password"
                    placeholder="Password"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              {/* <Button type="submit">Submit form</Button> */}
              <Custombtn buttonText="Login" />
              <p className="login-text">Forgot Password</p>
              <hr className="hrline" />

              <div>
                <div className="mx-5">
                  <a className="" href="">
                    <img className="" src={images.google_logo} />
                  </a>
                  <a className="" href="">
                    <img className="mx-5" src={images.linkedin_logo} />
                  </a>
                </div>
              </div>
            </Form>
          </Col>
          <Col className=" col-md-6">
            <img
              src={images.login_img}
              style={{
                width: "100vh",
                overflowX: "hidden",
                height: "600px",
              }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
