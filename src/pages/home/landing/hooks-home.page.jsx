/* eslint-disable no-unused-vars */
import { ButtonComponent } from "../../../components/common/button/button.component";

import { H1 } from "../../../components/common/heading/heading.component";
import { Heading } from "../../../components/common/heading/heading.component";
import { useEffect, useState } from "react";
import "../landing/home.page.css";
import LoginPage from "../auth/login/login.page";
import { Container, Row ,Col} from "react-bootstrap";

const HomePage = () => {
  const [title, settitle] = useState("default value");
  const [loading, setloading] = useState();
  let [counter, setcounter] = useState(0);
  const clickListen = () => {
    settitle("updated title");
    setloading(false);
    console.log("i have been clicked");
  };

  useEffect(() => {
    console.log("i am always called");
  });

  useEffect(() => {
    console.log("i am once called");
    setloading(true);
  }, []);

  useEffect(() => {
    console.log("i am only called when state in srrays  gets changed ");
  }, [title, loading, counter]);
  const increasecount = () => {
    console.log(counter);
    setcounter(++counter);
  };
  return (
    <>
    
    <Container fluid>
      <Row>
<Col sm={12} >
<h1 className="text-center"> {title}</h1>
</Col>
      </Row>

    </Container>
      <p>clicked for: {counter}</p>
      <button onClick={increasecount}> click here </button>
      <H1 value={title}></H1>
      <Heading type="h1" value={title}></Heading>
      <ButtonComponent
        onClick={clickListen}
        type={"button"}
        label={"click me"}
      ></ButtonComponent>
      <ButtonComponent type={"submit"} label={"submit"}></ButtonComponent>
      <ButtonComponent label={"register"}></ButtonComponent>
      <ButtonComponent label={"login"}></ButtonComponent>
      <LoginPage/>
    </>
  );
};
// const ButtonComponent = ({ label,type,onClick}) => {
//   return (<button type={type} onClick={onClick}>{label}
//   <ButtonLabel label={label}></ButtonLabel></button>)
// }
// const ButtonLabel=({label})=>
// {
// return(<strong>
//     {label}
// </strong>)
// }
export default HomePage;
