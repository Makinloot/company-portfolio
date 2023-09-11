import { Formik, Form } from "formik";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import * as Yup from "yup";
import axios from "axios";
import InputField from "../components/contact/InputField";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .matches(/^[^@]+@[^@]+\.[^.]+$/, "Enter a valid email")
    .required(),
  password: Yup.string().required(),
});

export default function Auth() {
  const formRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(values, setSubmitting) {
    setError("");
    axios
      .post("http://localhost:3000/auth", values)
      .then((res) => {
        console.log(res);
        navigate("/panel");
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Either email or password is incorrect");
        setSubmitting(false);
      });
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}
      >
        {({
          handleChange,
          values,
          errors,
          touched,
          handleBlur,
          isSubmitting,
        }) => (
          <Form ref={formRef}>
            <div className="Contact-form pb-40 flex flex-col">
              <div className="form my-10 max-w-[600px] w-full self-center relative">
                <h2 className="text-3xl bg-red font-sofiaBlack">Sign in</h2>

                {error && <p className="mt-4 text-red-500">{error}</p>}
                <div className="w-[300px]">
                  <InputField
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    handleChange={handleChange("email")}
                    handleBlur={handleBlur("email")}
                    value={values.email}
                    error={touched.email && errors.email && errors.email}
                  />
                  <InputField
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    handleChange={handleChange("password")}
                    handleBlur={handleBlur("password")}
                    value={values.password}
                    error={
                      touched.password && errors.password && errors.password
                    }
                  />
                </div>
                {isSubmitting ? (
                  <span className="border-2 border-pinkPrimary flex justify-center items-center cursor-pointer text-pinkPrimary w-full text-center py-4 px-2 rounded-full max-w-[333px] absolute -bottom-[100px]">
                    <motion.div
                      className="w-6 h-6 rounded-full"
                      style={{
                        border: "5px solid #ccc",
                        borderTop: "5px solid #F74EA1",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 1,
                      }}
                    />
                  </span>
                ) : (
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="border-2 border-pinkPrimary cursor-pointer text-pinkPrimary w-full py-4 px-2 rounded-full max-w-[333px] absolute -bottom-[100px]"
                  />
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
