import * as YUP from 'yup'

export const signUpSchema = YUP.object({
  name:YUP.string().min(2).max(25).required("Please enter your name"),
  email:YUP.string().email().required("Please enter your Email"),
  password:YUP.string().min(6).required("Please enter your Password"),
  confirm_password:YUP.string()
  .required()
  .oneOf([YUP.ref("password"),null], "Password must match"),
})