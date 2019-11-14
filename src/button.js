import React from "react";

function Button({ color = "#5e5ce6", children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: 10,
        textTransform: "uppercase",
        fontWeight: "bold",
        cursor: "pointer",
        color,
        backgroundColor: "white",
        border: `2px solid ${color}`,
        ...props.style
      }}
    >
      {children}
    </button>
  );
}

export default Button;
