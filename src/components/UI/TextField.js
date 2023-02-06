import React from "react";
import classes from "./TextField.module.css";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className={classes.textField}>
      <label>{label}</label>
      <input
        className={classes.input}
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
