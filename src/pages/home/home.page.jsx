import { ButtonComponent } from "../../components/common/button/button.component";
import { Form } from "react-bootstrap";
import { H1 } from "../../components/common/heading/heading.component";
import { Heading } from "../../components/common/heading/heading.component";
// import { useState } from "react";
const HomePage = ({ title }) => {
  // const [title,titleset] = useState("Default value")

  const clickListen = () => {
    // titleset("updated title")
    console.log("i have been clickeds");
  };

  return (
    <div>
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
      <Form></Form>
    </div>
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
