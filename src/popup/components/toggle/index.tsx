import styles from "./index.module.css";
import c from "classnames";

export const Toggle = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (newValue: boolean) => void;
}) => {
  return (
    <button
      class={c(styles.main, {
        [styles.isOn]: value,
        [styles.isOff]: !value,
      })}
      onClick={() => onChange(!value)}
    ></button>
  );
};
