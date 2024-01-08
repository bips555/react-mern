import { Container,Col,Row } from "react-bootstrap"
import { Title } from "../../../../components/common/heading/heading.component.jsx"

import { Divider } from "../../../../components/common/heading/heading.component.jsx"
import PasswordSetComponent from "../../../../components/home/auth/password-set.component.jsx"

const SetpasswordPage = () => {


const submitEvent = (data) =>
{
console.log(data)


}


  return (
    <>
      <Container className="login-wrapper opacity-75 my-5">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Title className="mt-5">Set Password </Title>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
         <PasswordSetComponent submitEvent={submitEvent}/>
           
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SetpasswordPage