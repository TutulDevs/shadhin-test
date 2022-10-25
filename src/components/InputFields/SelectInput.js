import styles from "./InputFields.module.css";

export const SelectInput = ({ name, label, onChange, error, options }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>

      <select name={name} id={name} onChange={onChange}>
        <option value={null}>Select...</option>

        {options.map((el) => (
          <option key={el.value} value={el.value}>{el.label}</option>
        ))}
      </select>

      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};
