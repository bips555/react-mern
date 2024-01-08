import { Col, Container, Row, Form } from "react-bootstrap";
import "./set-password.page.css";
import HomeHeader from "../../../../components/home/header/home-header.component";
import styled from "styled-components";
import { ButtonComponent } from "../../../../components/common/button/button.component";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SetPassword = styled.h1`
  color: papayawhip;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 0px 20px;
  margin-top: 10px;
`;
const Divider = styled.hr`
  border-color: white;
`;

const Setpassword = () => {
  return (
    <>
      <HomeHeader />
      <Container className="login-wrapper opacity-75 my-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <SetPassword className="mt-5">Login Page</SetPassword>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Form>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 text-center papayawhip">
                  Username:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    placeholder="Enter your new pas"
                    type="password"
                    required
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 papayawhip text-center ">
                  Password:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    placeholder="Enter your Password"
                    type="password"
                    required
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3 text-center">
                <Col sm={12} md={12} lg={12}>
                  <ButtonComponent
                    className="btn-danger me-2 "
                    type="reset"
                    label="Cancel"
                  ></ButtonComponent>
                  <ButtonComponent
                    type="submit"
                    label="Login"
                  ></ButtonComponent>
                </Col>
              </Form.Group>
              <div className="me-auto mb-3">
                Or, &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/forget-password">Forgot Password?</a>
              </div>
            </Form>
            <div className="me-auto">
              {" "}
              Or &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/register">Create an Account</a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Setpassword;
