import React from "react";
// Import used bootstrap components  from react-bootstrap
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Layout() {
  return (
    <div>
      {/* <div className="home">
        <h1>React Bootstrap Checkpoint</h1>
      </div> */}
      <div className="login">
        <div className="div-1">
          {/* <img src="images/GoMyCode.png" alt="GoMyCode" /> */}
          <h1>React Bootstrap Checkpoint</h1>
        </div>
        <div className="form">
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                Password
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              {/* <Form.Check label="Remember me" /> */}

              <Col sm={12} className="btn">
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Layout;
