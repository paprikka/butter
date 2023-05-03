import { ComponentChildren } from "preact";
import styles from "./index.module.css";
import c from "classnames";

export const Button = ({
  children,
  level = "default",
  onClick,
  disabled = false,
}: {
  children: ComponentChildren;
  level?: "default" | "primary";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      class={c(styles.main, {
        [styles.isPrimary]: level === "primary",
        [styles.isDefault]: level === "default",
      })}
    >
      {children}
    </button>
  );
};
