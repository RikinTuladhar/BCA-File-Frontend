import React, { useId } from "react";

const TextArea = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  type,
  rows = 10,
  cols = 10,
  className = "",
}) => {
    const id = useId();
  return (
    <div className="flex flex-col w-full">
    {label && <label className="inline-block mb-2 text-lg font-semibold md:text-xl" htmlFor={id}>{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        rows={rows}
        cols={cols}
        className={`bg-[#e0eefe border px-5 py-10 rounded-lg ${className}`}
        id={id}
      ></textarea>
    </div>
  );
};

export default TextArea;
