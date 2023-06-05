import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./LoginPageone.css";


function LoginPage() {


  return (
    <section className="login-page-1">
      <div className="d-lg-flex">
        <div className="login-image" />
        <div className="base">
          <Container>
            <Row className="login-row">
              <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <h3>Welcome to <strong>Invension</strong></h3>
                <p>Please login with your account</p>
                <Form className="login-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div className="d-flex justify-content-between mb-4">
                    <Form.Group className="mb-3">
                      <Form.Check checked className="remember-me" type="checkbox" label="Remember me" />
                    </Form.Group>
                    <a href className="forgot-pass">Forgot Password</a>
                  </div>
                  <Button type="submit" className="login-btn">
                    Login
                  </Button>
                </Form>
              </div>
            </Row>
          </Container>

        </div>
      </div>
    </section>
  )

}
export default LoginPage;