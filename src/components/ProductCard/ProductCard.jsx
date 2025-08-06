"use client";
import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ imagem, nome, preco, desc, star, qntStar }) {
    const [aberto, setAberto] = useState(false);

    return (
        <div className={styles.container}>
            <img src={imagem} alt="" className={styles.image} />

            <div className={styles.nome}>
                <h2>{nome}</h2>
            </div>

            <div className={styles.preco}>
                <h1>{preco}</h1>
            </div>

            <div className={styles.descricao}>
                <p>{desc}</p>

            </div>

            <div className={styles.stars}>
                <span>⭐⭐⭐⭐⭐</span>
                <p>{star}</p>
                <p>-</p>
                <p>{qntStar} avaliações</p>
            </div>
        </div>
    );
}