import { Form,Col } from "react-bootstrap"
import { ButtonComponent } from "../../common/button/button.component.jsx"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
const PasswordSetComponent=({submitEvent})=>
{const yupSchema = Yup.object({
  password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,"password must match regex").required(),
  confirmPassword:Yup.string().oneOf(
    [Yup.ref('password'),null],"password doesnot match"
  )

})
  const {register,handleSubmit,formState:{errors}} = useForm({
    
      resolver:yupResolver(yupSchema)
    }
      )
    
console.log(errors)

return(
    <>
       <Form onSubmit={handleSubmit(submitEvent)}>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 text-center papayawhip">
                    Password:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                  {...register("password",{required:true})}
                    placeholder="Enter your Password"
                    type="password"
                  />
                    <span className="text-danger">
                    <em>
                    {errors?.password?.message}
                    </em>
                  </span>
                </Col>
              </Form.Group>
              <Form.Group className="row p-3">
                <Form.Label className="col-sm-3 pt-1 papayawhip text-center ">
                 Confirm Password:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                   {...register("confirmPassword",{required:true,minLength:8,maxLength:30})}
                    placeholder="Re-Enter your Password"
                    type="password"
                    required
                  >
                    
                  </Form.Control>
                  <span className="text-danger">
                    <em>
                    {errors?.confirmPassword?.message}
                    </em>
                  </span>
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
    </>
)
}
export default PasswordSetComponent