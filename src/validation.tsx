import * as Yup from "yup";

const validation = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  email: Yup.string().email("Email is invalid").required("Email is required")
});

export default validation;
