import React from "react";

const Button = ({
    label,
    iconURL,
    backgroundColor,
    borderColor,
    textColor,
    fullWidth,
}) => {
    return (
        <button
            className={`flex rounded-full justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg
            ${
                backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "bg-coral-red border-coral-red text-white"
            }
            ${fullWidth && "w-full"}
        `}
        >
            {label}
            {iconURL && (
                <img
                    src={iconURL}
                    className="ml-2 rounded-full w-5 h-5"
                    alt="arrow-right icon"
                />
            )}
        </button>
    );
};

export default Button;
