import styles from "./index.module.css";

export const PowerSwitch = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="180"
      viewBox="0 0 768 768"
      class={styles.main}
    >
      <path d="M480 768v-64.5h64.5v64.5h-64.5zM529.5 142.5q111 78 111 210 0 105-75 180t-181.5 75-181.5-75-75-180q0-55.5 32.25-117t78.75-93l45 45q-91.5 57-91.5 165 0 79.5 56.25 135.75t135.75 56.25 135.75-56.25 56.25-135.75q0-45-27-93t-66-70.5zM415.5 64.5v319.5h-63v-319.5h63zM352.5 768v-64.5h63v64.5h-63zM223.5 768v-64.5h64.5v64.5h-64.5z"></path>
    </svg>
  );
};
