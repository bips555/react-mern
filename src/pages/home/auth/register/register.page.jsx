import "./register.page.css";
import { Col, Container, Row, Form, Image } from "react-bootstrap";
import { ButtonComponent } from "../../../../components/common/button/button.component";
import "@fortawesome/fontawesome-free/css/all.min.css";
import placeholder from "../../../../assets/images/placeholder.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import { Title } from "../../../../components/common/heading/heading.component.jsx";
import { Divider } from "../../../../components/common/heading/heading.component.jsx";
const options = [
  { value: "seller", label: "Seller" },
  { value: "customer", label: "Buyer" },
];
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const RegisterPage = () => {
  const [thumb, setThumb] = useState();
  const registerSchema = Yup.object({
    name: Yup.string().min(2).max(30).required(),
    email: Yup.string().email().required(),
    role: Yup.object({
      value: Yup.string().matches(/customer|seller/),
      label: Yup.string().matches(/Buyer|Seller/),
    }).required(),
  });
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const registerSubmit = (data) => {
    data.role = data.role.value;
    console.log(data);
  };
  return (
    <>
      <Container className="register-wrapper opacity-75 mt-5">
        <Row>
          <Col sm={12} md={{ offset: 2, span: 8 }}>
            <Title className="mt-5">Registration Form</Title>
          </Col>
        </Row>
        <Divider />
        <Row className="my-3 pb-5 ">
          <Col sm={12} md={{ offset: 2, span: 8 }}>
            <Form onSubmit={handleSubmit(registerSubmit)}>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 papayawhip text-center">
                  Full Name:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    {...register("name", { required: true })}
                    placeholder="Enter your Name"
                    type="text"
                    required
                  />
                  <span className="text-danger">
                    <em>{errors?.name?.message}</em>
                  </span>
                </Col>
              </Form.Group>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 papayawhip text-center">
                  Email:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    {...register("email", { required: true })}
                    placeholder="Enter your Email"
                    type="email"
                    required
                  />
                  <span className="text-danger">
                    <em>{errors?.email?.message}</em>
                  </span>
                </Col>
              </Form.Group>
              <Form.Group className="row p-3" controlId="role">
                <Form.Label className="col-sm-3 pt-1 papayawhip text-center">
                  Role:
                </Form.Label>
                <Col sm={9}>
                  <Select
                    options={options}
                    onChange={(e) => {
                      console.log(options);
                      setValue("role", e);
                    }}
                  />
                  <span className="text-danger">
                    <em>{errors?.role?.message}</em>
                  </span>
                </Col>
              </Form.Group>
              <Form.Group className="row p-3" controlId="image">
                <Form.Label className="col-sm-3 pt-1 papayawhip text-center">
                  Upload Image:
                </Form.Label>
                <Col sm={7}>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={(e) => {
                      // const files = Object.values(e.target.files);
                      const image = e.target.files[0];
                      const exst = image.name.split(".").pop();
                      if (
                        [
                          "jpg",
                          "jpeg",
                          "gif",
                          "svg",
                          "bmp",
                          "webp",
                          "png",
                        ].includes(exst.toLowerCase())
                      ) {
                        if (image.size <= 3 * 1024 * 1024) {
                          setThumb(image);
                          setValue("image", image);
                        } else {
                          setError("image", "file should be less than 3mb.");
                        }
                      } else {
                        setError("image", "file format not supported");
                      }
                    }}
                  />
                  <span className="text-danger">
                    <em>{errors?.image?.message}</em>{" "}
                  </span>
                </Col>
                <Col sm={2}>
                  <Image
                    src={thumb ? URL.createObjectURL(thumb) : placeholder}
                    fluid
                    alt=""
                  />
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3 text-center">
                <Col sm={{ offset: 3, span: 9 }}>
                  <ButtonComponent
                    className="btn-danger me-2 "
                    type="reset"
                    label="Cancel"
                  />
                  <ButtonComponent type="submit" label="Register" />
                </Col>
              </Form.Group>

              <Col sm={12} md={12}>
                <Form.Group className="row pb-3">
                  <div className="me-auto">
                    Already have an account? &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/login">Login here</a>
                  </div>
                </Form.Group>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
