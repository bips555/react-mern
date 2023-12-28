import { ButtonComponent } from "../../components/common/button/button.component";
import { Form } from "react-bootstrap";
import { H1 } from "../../components/common/heading/heading.component";
import { Heading } from "../../components/common/heading/heading.component";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [title, settitle] = useState("default value");
  const [loading, setloading] = useState();
  const clickListen = () => {
    settitle("updated title");
    setloading(false);
    console.log("i have been clickeds");
  };

  useEffect(() => {
    console.log("i am always called");
  });

  useEffect(() => {
    console.log("i am once called");
    setloading(true);
  }, []);

  useEffect(() => {
    console.log("i am only called when title gets changed ");
  }, [title, loading]);
  
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
