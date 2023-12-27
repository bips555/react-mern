import { ButtonComponent } from "../../components/common/button/button.component";
import { Form } from "react-bootstrap";
const HomePage = ({ title }) => {
  const clickListen = () => {
    console.log("i have been clicked");
  };
  return (
    <div>
      <h2>{title}</h2>
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
