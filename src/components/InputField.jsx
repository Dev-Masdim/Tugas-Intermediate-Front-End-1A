import React from "react";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  OnChange,
  name,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semiblod mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={OnChange}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-sm"
        required
      />
    </div>
  );
};

export default InputField;
