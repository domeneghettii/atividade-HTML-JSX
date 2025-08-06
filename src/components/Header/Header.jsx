import Image from "next/image";
import styles from "./Header.module.css";

export default function Header({ title, subtitle, totalProducts }) {
  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="Logo da empresa" width={60} height={60} priority className={styles.logo} />
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>📊 Total de produtos: {totalProducts}</p>
    </header>
  );
}