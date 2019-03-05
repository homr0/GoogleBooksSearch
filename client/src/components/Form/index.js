import React from "react";

export const Input = (props) => {
  return(
    <div className={"input-field col s" + props.size}>
      <input type={props.inputType || "text"} id={props.id} name={props.name} onChange={props.handleInputChange} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}