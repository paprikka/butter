import { ComponentChildren } from "preact";
import styles from "./index.module.css";

export const PageContainer = ({
  isPadded = true,
  children,
}: {
  isPadded?: boolean;
  children: ComponentChildren;
}) => {
  return <div class={isPadded ? styles.isPadded : ""}>{children}</div>;
};
