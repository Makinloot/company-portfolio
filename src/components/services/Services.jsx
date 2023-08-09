/* eslint-disable react/prop-types */
import "./Services.css";
export default function Services() {
  return (
    <section className="Services" id="services">
      <div className="container">
        <div className="Services-wrapper px-4 flex min-h-[100vh] flex-col items-center justify-center">
          <h2 className="uppercase font-sofiaMedium text-center text-[4rem] lg:text-[7rem]">
            rise with us
          </h2>
          <p className="uppercase text-3xl mt-[50px] text-center">
            do not wait for tomorrow make it happen now
          </p>
          <div className="Services-buttons mt-[160px] flex gap-24 flex-wrap justify-center">
            <Button value="consultation" />
            <Button value="call" />
            <Button value="email" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Button({ value }) {
  return (
    <button className="uppercase services-button hover:scale-90 transition-all duration-300 tracking-widest font-sofiaMedium border-4 w-[250px] h-[60px] text-[1.5rem] border-black">
      {value}
    </button>
  );
}
