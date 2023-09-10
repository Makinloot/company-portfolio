import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  firstName: Yup.string().required("Required field").min(2),
  lastName: Yup.string().required("Required field").min(2),
  email: Yup.string()
    .email("Enter a valid email")
    .matches(/^[^@]+@[^@]+\.[^.]+$/, "Enter a valid email")
    .required("Required field"),
  message: Yup.string().required("Required field").max(3000),
  acceptPolicy: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions.")
    .required(),
});

export default contactSchema;
