import React from "react";

interface Props {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
}

const Checkbox = (props: Props) => {
  return (
    <div className= "radio__input">
      <input
        type="radio"
        id={props.label}
        checked={props.isChecked}
        onChange={props.handleChange}
        name={props.name}
      />
      <label className="checkboxlabel" htmlFor={props.label}>{props.label}</label>
    </div>
  );
};
export default Checkbox;
