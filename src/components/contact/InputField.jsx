import "./Contact.css";
// eslint-disable-next-line react/prop-types
export default function InputField({ type, placeholder, text, id }) {
  if (text) {
    return (
      <div className="input-field">
        <textarea
          id={id}
          cols="30"
          rows="5"
          placeholder={placeholder}
          className="bg-transparent placeholder:text-[#a5a5a5] placeholder:font-sofia outline-none px-1 text-lg w-full my-6 py-2 border-[1px] border-black"
        ></textarea>
      </div>
    );
  }

  return (
    <div className="input-field">
      <input
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder}
        className="bg-transparent placeholder:text-[#a5a5a5] placeholder:font-sofia outline-none px-1 text-lg w-full my-2 py-2 border-b-[1px] border-black"
      />
    </div>
  );
}
