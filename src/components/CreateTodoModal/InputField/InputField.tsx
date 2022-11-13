import React, { ChangeEvent } from "react";
import styles from "./input-field.module.scss";
const InputField = ({
  placeholder,
  type,
  value,
  onChange,
}: {
  placeholder: string;
  type: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { input, inputField, inputLabel } = styles;

  return (
    <label className={input}>
      <input className={inputField} type={type} placeholder=" " onChange={onChange} required value={value} />
      <span className={inputLabel}>{placeholder}</span>
    </label>
  );
};

export default InputField;
