import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("This field is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("This field is required."),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("This field is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("This field is required."),
  confirmPassword: Yup.string()
    .required("This field is required.")
    .oneOf([Yup.ref("password")], "Passwords do not match."),
});
