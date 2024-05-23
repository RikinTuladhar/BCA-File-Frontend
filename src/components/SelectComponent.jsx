import React, { useId } from "react";
const SelectComponent = ({
  name,
  label,
  value,
  onChange,
  options,
  error,
  placeholder,
  type,
  className,
}) => {
    const id = useId();
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className="inline-block mb-2 text-lg font-semibold md:text-xl"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <select className="px-2 py-2 font-semibold rounded-lg" onChange={onChange} name={name}>
      <option value="" disabled selected>Select {name}</option>
      {options?.map((option,i)=>(
        <option key={i} value={option?.id}>{option?.name}</option>
      ))}
      </select>
    </div>
  );
};

export default SelectComponent;
