import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={200}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
        ) : (
          <span>{product.emoji}</span>
        )}
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.rating}>
        <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
        <span>({product.rating}) - {product.reviews} avaliações</span>
      </div>
    </div>
  );
}
