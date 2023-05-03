import { ComponentChildren } from "preact";
import c from "classnames";
import styles from "./index.module.css";

export const Alert = ({
  children,
  level = "info",
}: {
  children: ComponentChildren;
  level?: "error" | "success" | "info";
}) => {
  return (
    <p
      class={c(styles.main, {
        [styles.isError]: level === "error",
        [styles.isSuccess]: level === "success",
        [styles.isInfo]: level === "info",
      })}
    >
      {children}
    </p>
  );
};
