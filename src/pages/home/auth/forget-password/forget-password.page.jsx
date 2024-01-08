import { Container, Col, Row, Form } from "react-bootstrap";
import {
  Title,
  Divider,
} from "../../../../components/common/heading/heading.component.jsx";
import { ButtonComponent } from "../../../../components/common/button/button.component.jsx";
import { useState } from "react";
import { toast } from "react-toastify";
const ForgetPassword = () => {
    const [data,setData]=useState()
    const handleChange=((e) => {
        const { name, value } = e.target;
        console.log({ value });
        setData({
            ...data,
            [name]:value
        })
      }    
    )
    const handleSubmit = (e) =>
    {
e.preventDefault()
try
{
   toast.success("An email with the instructions has been sent to registered user you provided.")

}
catch(exception)
{
    toast.error("cannot process request !sorry! ")
}
    }
      return (
    <>
      <Container className="login-wrapper opacity-75 my-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Title className="mt-5">Forget Password </Title>
            <p className="text-center text-light" style={{ fontSize: "small" }}>
              <em>
                Please use the registered email for reset. You will receive an
                email for resetting the password. Follow the instructions for
                the email.
              </em>
            </p>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 text-center papayawhip">
                  Email:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    placeholder="Enter your Email"
                    name="email"
                    onChange={handleChange}
                    type="email"
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
                    label="Submit"
                  ></ButtonComponent>
                </Col>
              </Form.Group>
            </Form>
            <div className="me-auto">
            
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/login">Login</a> Or &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/register">Create an Account</a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ForgetPassword;
