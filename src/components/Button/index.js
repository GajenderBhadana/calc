import React from "react";
import "../../calculator.css";

const Button = props => {
  const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };
  return (
    <div
      className={`buttonWrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
