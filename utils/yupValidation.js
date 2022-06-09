import * as yup from "yup";

export const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Required field"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must have at least ${min} characters`)
    .required("Required field"),
  confirmPassword: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

export const signinValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Required field"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must have at least ${min} characters`)
    .required("Required field"),
});
