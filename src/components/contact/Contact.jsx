import { motion } from "framer-motion";
import InputField from "./InputField";
import { Formik, Form } from "formik";
import contactSchema from "../../validationSchema";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import Popup from "../popup/Popup";
// eslint-disable-next-line react/prop-types
export default function Contact({ active, setActive }) {
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  const submitForm = async (setSubmitting) => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        "iel2pyfwhAWlMUS4i"
      );
      setSubmitting(false);
      setShowPopup(true);
    } catch (error) {
      setSubmitting(false);
      setShowPopup(true);
      setPopupText(error);
      console.log(error);
    }
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setShowPopup(false);
      setPopupText("");
    });

    return () =>
      document.removeEventListener("click", () => {
        setShowPopup(false);
        setPopupText("");
      });
  }, [showPopup]);

  return (
    <motion.div
      className={`Contact z-[100] ${
        active ? "pointer-events-auto" : "pointer-events-none"
      } pt-40 min-h-screen h-screen bg-white grid lg:grid-cols-2 gap-8 grid-rows-[.40fr .20fr .40fr] top-0 items-center absolute left-0 w-full px-4`}
      animate={
        active
          ? { opacity: 1, display: "grid" }
          : { opacity: 0, display: "none" }
      }
    >
      <button
        onClick={() => setActive(!active)}
        className="Contact-close fixed top-12 h-12 z-[1000] flex justify-center items-center w-[50px] right-6 text-pinkPrimary"
      >
        <span className="h-2 w-full rotate-45 bg-pinkPrimary block absolute left-0"></span>
        <span className="h-2 w-full -rotate-45 bg-pinkPrimary block absolute left-0"></span>
      </button>
      <div className="Contact-details text-3xl font-sofiaBlack flex lg:flex-col justify-center lg:justify-start items-center">
        <div>
          <h2 className="text-pinkPrimary">
            Let us help you get your project started.
          </h2>
          <span className="text-xl my-8 block font-circular">Contact us</span>
          <p className="text-pinkPrimary my-4">hello@purpledminds.com</p>
          <div className="flex flex-wrap my-4">
            Tbilisi:{" "}
            <span className="ml-2 text-pinkPrimary">+955 571 191 909</span>
          </div>
          <div className="flex flex-wrap my-4">
            Brooklyn, NY:{" "}
            <span className="ml-2 text-pinkPrimary">+1 862 2287899</span>
          </div>
        </div>
      </div>
      {/* <hr className="bg-black h-[2px] w-full my-20" /> */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          acceptPolicy: false,
        }}
        validationSchema={contactSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await submitForm(setSubmitting);
          resetForm();
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
            <Popup active={showPopup} value={popupText} />
            <div className="Contact-form pb-40 flex flex-col">
              <div className="form my-10 max-w-[600px] w-full self-center relative">
                <h2 className="text-3xl bg-red font-sofiaBlack">
                  Start your project
                </h2>
                <InputField
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  handleChange={handleChange("firstName")}
                  handleBlur={handleBlur("firstName")}
                  value={values.firstName}
                  error={
                    touched.firstName && errors.firstName && errors.firstName
                  }
                />
                <InputField
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  handleChange={handleChange("lastName")}
                  handleBlur={handleBlur("lastName")}
                  value={values.lastName}
                  error={touched.lastName && errors.lastName && errors.lastName}
                />
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
                  placeholder="Message"
                  text
                  id="message"
                  name="message"
                  handleChange={handleChange("message")}
                  handleBlur={handleBlur("message")}
                  value={values.message}
                  error={touched.message && errors.message && errors.message}
                />
                <InputField
                  type="checkbox"
                  id="policy-checkbox"
                  name="policy-checkbox"
                  handleChange={handleChange("acceptPolicy")}
                  value={values.acceptPolicy}
                  error={
                    touched.acceptPolicy &&
                    errors.acceptPolicy &&
                    errors.acceptPolicy
                  }
                />
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
    </motion.div>
  );
}
