import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "",
    textColor = "",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg  ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
