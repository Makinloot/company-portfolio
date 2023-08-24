/* eslint-disable react/prop-types */
import "./Services.css";
import logo from "/logo.png";
export default function Services({ contact, setContact }) {
  return (
    <section className="Services" id="services">
      <div className="container">
        <div className="Services-wrapper relative px-4 flex min-h-[100vh] flex-col items-center justify-center">
          <a href="/" className="absolute w-44 p-5 top-2 left-2">
            <img
              src={logo}
              alt="purple logo"
              className="w-full h-full object-contain"
            />
          </a>
          <h2 className="uppercase font-sofiaMedium text-center text-[4rem] lg:text-[7rem]">
            rise with us
          </h2>
          <p className="uppercase text-3xl mt-[50px] text-center">
            do not wait for tomorrow make it happen now
          </p>
          <div className="Services-buttons mt-[160px] flex gap-24 flex-wrap justify-center">
            <Button
              contact={contact}
              setContact={setContact}
              value="consultation"
            />
            <Button contact={contact} setContact={setContact} value="call" />
            <Button contact={contact} setContact={setContact} value="email" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Button({ value, contact, setContact }) {
  return (
    <button
      onClick={() => setContact(!contact)}
      className="uppercase services-button hover:scale-90 transition-all duration-300 tracking-widest font-sofiaMedium border-4 w-[250px] h-[60px] text-[1.5rem] border-black"
    >
      {value}
    </button>
  );
}
