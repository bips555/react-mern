import { Container, Col, Row, Spinner } from "react-bootstrap";
import { Title } from "../../../../components/common/heading/heading.component.jsx";
import { Divider } from "../../../../components/common/heading/heading.component.jsx";
import PasswordSetComponent from "../../../../components/home/auth/password-set.component.jsx";
import authService from "../auth.service.js";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SetpasswordPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const verifyToken = async () => {
    try {
      const verified = await authService.getActivationTokenVerify(params.token);
console.log(verified)
     setLoading(false)
    } catch (exception) {
      console.log('exception',exception)
      toast.error(exception.message);
      navigate('/login')
    }
  };
  useEffect(() => {
    verifyToken();
  }, [params]);

  const submitEvent = async (data) => {
   try
   {
let response = await authService.activateUser(params.token,data)
toast.success(response.message)
navigate('/login')
   }
   catch(exception)
   {
toast.error(exception.message)
navigate('/')
   }
  };

  return (
    <>
      <Container className="login-wrapper opacity-75 my-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Title className="mt-5">Set Password </Title>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5 text-center">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            {(loading) ? 
              <>
                <Spinner variant="light" />
              </>
             : (
              <PasswordSetComponent submitEvent={submitEvent} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SetpasswordPage;
