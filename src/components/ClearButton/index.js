import React from "react";
import "../../calculator.css";

const ClearButton = props => {
  return (
    <div className='clearBtn' onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
