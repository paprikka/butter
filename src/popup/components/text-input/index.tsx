import styles from "./index.module.css";

export const TextInput = ({
  value,
  onChange,
  isPassword = false,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  isPassword?: boolean;
  placeholder?: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      class={styles.main}
      type={isPassword ? "password" : "text"}
      value={value}
      onInput={(e) => onChange(e.currentTarget.value)}
    />
  );
};
