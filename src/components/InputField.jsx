import React, { useId } from "react";

const InputField = React.forwardRef(function (
  {
    label,
    type = "text",
    name,
    onChange,
    value,
    className = "",
    disabled = false,
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block pl-1 mb-1 text-xl " htmlFor={id}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      )}
      <input
        className={`w-full border font-semibold border-black border-x-2 px-3 py-2 text-[#0d2644] rounded-lg  outline-none focus:border-blue-900 duration-500 ${className}`}
        type={type}
        name={name}
        value={value}
        id={id}
        disabled={disabled}
        ref={ref}
        onChange={onChange}
      />
    </div>
  );
});

export default InputField;

{
  /* <InputField label={"Short Message "} name="" className="bg-red-400"/> */
}
