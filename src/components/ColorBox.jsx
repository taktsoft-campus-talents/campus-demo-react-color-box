import styles from "./ColorBox.module.css";

export function ColorBox({ color = "orange", label, highlight }) {
  return (
    <div
      className={styles["color-box"]}
      style={{
        backgroundColor: color,
        borderWidth: highlight ? 6 : undefined,
      }}
    >
      <p>
        {label}
        {highlight ? <p>Ich bin das Highlight</p> : undefined}
      </p>
    </div>
  );
}
