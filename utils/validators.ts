import * as yup from 'yup'

export default () => {
  const loginSchema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required'),
  })

  const signupSchema = loginSchema.shape({
    firstName: yup.string().required('First name is required'),
    lastNamme: yup.string().required('Last name is required'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })

  return {
    loginSchema,
    signupSchema,
  }
}
