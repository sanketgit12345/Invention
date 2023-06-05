import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./LoginPagesecond.css";

function LoginPage() {

    // https://fontawesome.com/v4/icons/ fontawsome icon link
    // Short cut key for code format shift+alt+f

    return (
        <section>
            <div className="login-container">
                <div className="col-md-4 login-p">
                    <Form>
                        <h4 className="login-text">Log in</h4>
                        <InputGroup className="username">
                            <InputGroup.Text className="user-icon"><i class="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                type="text"
                            />
                        </InputGroup>

                        <InputGroup className="username">
                            <InputGroup.Text className="user-icon"><i class="fa fa-unlock-alt" aria-hidden="true"></i></InputGroup.Text>
                            <Form.Control
                                placeholder="Password"
                                type="password"
                            />
                        </InputGroup>
                        <Form.Group className="rem-box">
                            <Form.Check type="checkbox" label="Remember me" className="remember-me" />
                        </Form.Group>
                        <div className="loginbtn-box">
                            <Button className="loginbtn" variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                        <div className="forgot-box">
                        <a href className="forgot-pass">
                          Forgot Password?
                        </a>
                        </div>
                       
                    </Form>
                </div>
            </div >
        </section>
    )

}
export default LoginPage;