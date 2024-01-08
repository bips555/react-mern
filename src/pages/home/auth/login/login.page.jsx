import { Col, Container, Row, Form } from "react-bootstrap";
import "./login.page.css";
import { ButtonComponent } from "../../../../components/common/button/button.component";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Title,Divider } from "../../../../components/common/heading/heading.component.jsx";
import { useForm } from "react-hook-form";
const LoginPage = () => {

const {register,handleSubmit,formState:{errors}}= useForm()
const loginSubmit=(data)=>
{
  console.log(data)
}



  return (
    <>
     
      <Container className="login-wrapper opacity-75 my-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Title className="mt-5">Login Page</Title>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Form onSubmit={handleSubmit(loginSubmit)}>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 text-center papayawhip">
                    Email:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                  {...register("email",{required:true})}
                    placeholder="Enter your Email"
                    type="email"
                    
                  /><span className="text-danger">
                    <em >{errors.email ? "email is required":""}</em>
                  </span>
                </Col>
              </Form.Group>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 papayawhip text-center ">
                  Password:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                   {...register("password",{required:true})}
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
export default LoginPage;
