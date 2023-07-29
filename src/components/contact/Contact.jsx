import { motion } from "framer-motion";
import InputField from "./InputField";
// eslint-disable-next-line react/prop-types
export default function Contact({ active, setActive }) {
  return (
    <motion.div
      className={`Contact z-[100] ${
        active ? "pointer-events-auto" : "pointer-events-none"
      } pt-40 min-h-screen h-screen bg-white grid lg:grid-cols-2 gap-8 grid-rows-[.40fr .20fr .40fr] top-0 items-center absolute left-0 w-full px-4`}
      animate={active ? { opacity: 1 } : { opacity: 0 }}
    >
      <button
        onClick={() => setActive(!active)}
        className="Contact-close fixed top-12 p-8 flex justify-center items-center w-[50px] right-6 text-pinkPrimary"
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
          <p className="text-pinkPrimary my-4">hello@kota.co.uk</p>
          <div className="flex flex-wrap my-4">
            London: <span className="text-pinkPrimary">+44(0)20 3951 0562</span>
          </div>
          <div className="flex flex-wrap my-4">
            New York: <span className="text-pinkPrimary">+1 833 502 0267</span>
          </div>
        </div>
      </div>
      {/* <hr className="bg-black h-[2px] w-full my-20" /> */}
      <div className="Contact-form pb-40 flex justify-center items-center flex-col">
        <div>
          <h2 className="text-3xl bg-red font-sofiaBlack">
            Start your project
          </h2>
          <div className="form my-10 max-w-[500px] relative">
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
            <InputField placeholder="Email" type="email" />
            <InputField placeholder="Message" text />
            <label htmlFor="privacy-checkbox" className="flex my-2">
              <InputField type="checkbox" id="privacy-checkbox" />
              <span className="text-sm ml-4">
                I understand that{" "}
                <span className="text-pinkPrimary">Purple</span> will securely
                hold my data in accordance with their privacy policy.
              </span>
            </label>
            <input
              type="submit"
              value="SUBMIT"
              className="border-2 border-pinkPrimary text-pinkPrimary w-full py-4 px-2 rounded-full max-w-[333px] absolute -bottom-[100px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
