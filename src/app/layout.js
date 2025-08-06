import Header from "../components/Header/Header";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = localFont({
  src: "../../public/font/Roboto-Regular.ttf",
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <Header
          title="🛒 Loja de Eletrônicos"
          subtitle="Os melhores produtos com os melhores preços!"
          totalProducts={10} // ou useState para contar
        />
        <main>{children}</main>
      </body>
    </html>
  );
}