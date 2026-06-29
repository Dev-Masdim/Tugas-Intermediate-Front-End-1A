import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const baseStyles =
    "w-full py-2.5 rounded-lg font-semibold text-sm transition duration-200 block text-center mb-3";

  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white shadow-md",
    secondary: "bg-orange-500 hover:bg-orange-600 text-white shadow-md",
    sso: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 flex items-center justify-center gap-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
