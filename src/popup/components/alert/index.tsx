import { ComponentChildren } from "preact";
import c from "classnames";
import styles from "./index.module.css";

export const Alert = ({
  children,
  level,
}: {
  children: ComponentChildren;
  level: "error" | "success";
}) => {
  return (
    <p
      class={c(styles.main, {
        [styles.isError]: level === "error",
        [styles.isSuccess]: level === "success",
      })}
    >
      {children}
    </p>
  );
};
