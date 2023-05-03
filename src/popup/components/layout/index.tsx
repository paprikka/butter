import styles from "./index.module.css";

import { ComponentChildren } from "preact";

export const HGroup = ({ children }: { children: ComponentChildren }) => (
  <div class={styles.hgroup}>{children}</div>
);

export const VGroup = ({ children }: { children: ComponentChildren }) => (
  <div class={styles.vgroup}>{children}</div>
);
