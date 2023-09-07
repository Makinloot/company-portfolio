/* eslint-disable react/prop-types */
import "./Contact.css";
export default function InputField({
  type,
  placeholder,
  text,
  id,
  handleChange,
  value,
  error,
  handleBlur,
  name,
}) {
  if (text) {
    return (
      <div className="input-field">
        {error && (
          <span className="text-sm font-sofiaBlack text-red-600">{error}</span>
        )}
        <textarea
          id={id}
          cols="30"
          rows="5"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          name={name}
          className={`bg-transparent resize-none placeholder:text-[#a5a5a5] placeholder:font-sofia outline-none px-1 text-lg w-full my-6 py-2 border-[1px] ${
            error ? "border-red-500" : "border-black"
          }`}
        />
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <label
        htmlFor={id}
        className="flex items-center justify-start input-field my-4"
      >
        {/* {error && (
          <span className="text-sm font-sofiaBlack text-red-600">{error}</span>
        )} */}
        <input
          id={id}
          type={type ? type : "text"}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          name={name}
          className={`placeholder:text-[#a5a5a5] ${
            error ? "border-red-500" : "border-black"
          }`}
        />
        {error ? (
          <span className="ml-4 text-sm font-sofiaBlack text-red-600">
            {error}
          </span>
        ) : (
          <span className="text-sm ml-4">
            I understand that
            <span className="text-pinkPrimary"> Purple</span> will securely hold
            my data in accordance with their privacy policy.
          </span>
        )}
      </label>
    );
  }

  return (
    <div className="input-field my-4 w-full">
      {error && (
        <span className="text-sm font-sofiaBlack text-red-600">{error}</span>
      )}
      <input
        id={id}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name={name}
        className={`bg-transparent placeholder:text-[#a5a5a5] placeholder:font-sofia outline-none px-1 text-lg w-full py-2 border-b-[1px] ${
          error ? "border-red-500" : "border-black"
        }`}
      />
    </div>
  );
}
