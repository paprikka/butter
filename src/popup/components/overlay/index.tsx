import { ComponentChildren } from "preact";
import styles from "./index.module.css";

export const Overlay = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: ComponentChildren;
}) => (
  <div class={styles.main} hidden={!isVisible}>
    {children}
  </div>
);
