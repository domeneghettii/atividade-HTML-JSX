import Link from "next/link";
import Image from "next/image";
import style from "./styles/Not.module.css";

export default function NotFound() {
    return (
        <div className={style.notFound}>
          <Image
            src="/errorgif.gif"
            alt="Página não encontrada"
            width={250}
            height={300}
          />
            
            <h1 className={style.title}>404</h1>
            <h2 className={style.subtitle}>🔍 404 - Página não encontrada</h2>
            <p className={style.text}>A página que você procura não existe.</p>
            <div className={style.buttonGroup}>
                <Link href="/" className={style.button}>🏠 Voltar para Home</Link>
                <Link href="/contato" className={style.button}>💬 Fale Conosco</Link>
            </div>
        </div>
    )
}