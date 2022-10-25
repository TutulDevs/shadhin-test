import React from "react";
import styles from "./InputFields.module.css";

export const TextInput = ({ type, name, label, onChange, value, error }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};
