import * as yup from 'yup'

export default () => {
  const loginSchema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters'),
  })

  const signupSchema = loginSchema.shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })

  const userInfoSchema = yup.object({
    firstName: yup
      .string()
      .required('First name is required')
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be less than 50 characters'),
    lastName: yup
      .string()
      .required('Last name is required')
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must be less than 50 characters'),
  })

  return {
    loginSchema,
    signupSchema,
    userInfoSchema,
  }
}
