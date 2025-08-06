import styles from "./page.module.css";
import ProductCard from "../components/ProductCard/ProductCard";

export default function HomePage() {
    return (
        <div className={styles.container}>
          <div className={styles.content}>
            <ProductCard
              imagem="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop"
              nome="iPhone 15 Pro Max 256GB"
              preco="R$ 8.999,00"
              desc="O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras
                    profissional."
              star="(4.8)"
              qntStar="1.234"
            />

            <ProductCard
              imagem="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop"
              nome="Samsung Galaxy S24 Ultra 512GB"
              preco="R$ 7.499,00"
              desc="Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos
                    incríveis."
              star="(4.7)"
              qntStar="987"
            />

            <ProductCard
              imagem="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop"
              nome="MacBook Pro 14 M3 Pro 18GB"
              preco="R$ 15.999,00"
              desc="Performance profissional com chip M3 Pro, tela Liquid Retina XDR e
                    bateria de longa duração."
              star="(4.9)"
              qntStar="2.156"
            />

            <ProductCard
              imagem="https://erbsinformatica.com.br/wp-content/uploads/2025/02/20250214_193740-scaled.jpg"
              nome="Dell XPS 13 Intel i7 16GB SSD 512GB"
              preco="R$ 6.799,00"
              desc="Ultrabook premium com design ultrafino, tela InfinityEdge e performance
                    excepcional."
              star="(4.6)"
              qntStar="543"
            />

            <ProductCard
              imagem="https://img.olx.com.br/images/50/508455561633024.jpg"
              nome="iPad Pro 12.9 M2 WiFi 128GB"
              preco="R$ 7.299,00"
              desc="O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil."
              star="(4.8)"
              qntStar="1.876"
            />

               <ProductCard
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EVa9uRy5xkUmWqYJd0chjBd0Cyjb-3v_bQ&s"
              nome="Samsung Galaxy Tab S9+ 256GB"
              preco="R$ 4.999,00"
              desc="Tablet premium Android com S Pen incluída, tela Dynamic AMOLED 2X e resistência à água."
              star="(4.5)"
              qntStar="432"
            />

            <ProductCard
              imagem="https://macmagazine.com.br/wp-content/uploads/2022/11/29-airpodspro01-scaled.jpg"
              nome="Apple AirPods Pro 2ª Geração"
              preco="R$ 2.399,00"
              desc="Fones sem fio com cancelamento ativo de ruído, áudio espacial e até 30h de bateria."
              star="(4.7)"
              qntStar="3.421"
            />

            <ProductCard
              imagem="https://img.olx.com.br/images/20/203547782241288.jpg"
              nome="Apple Watch Series 9 GPS 45mm"
              preco="R$ 4.299,00"
              desc="Smartwatch mais avançado com chip S9, Double Tap e monitoramento de saúde completo."
              star="(4.6)"
              qntStar="2.187"
            />

            <ProductCard
              imagem="https://carrefourbr.vtexassets.com/arquivos/ids/113246043/06c5f431382640af82b931ae9b14e2d1.jpg?v=638196040845000000"
              nome="Carregador Sem Fio MagSafe 15W"
              preco="R$ 399,00"
              desc="Carregamento sem fio rápido e seguro para iPhone, alinhamento magnético perfeito."
              star="(4.4)"
              qntStar="876"
            />

            <ProductCard
              imagem="https://files.tecnoblog.net/wp-content/uploads/2022/12/xiaomi-13-pro-1060x795.jpg"
              nome="Xiaomi 13 Pro 256GB Leica"
              preco="R$ 3.999,00"
              desc="Smartphone premium com câmeras Leica, carregamento ultra-rápido 120W e tela AMOLED."
              star="(4.5)"
              qntStar="654"
            />
            
          </div>
        </div>
    );
}