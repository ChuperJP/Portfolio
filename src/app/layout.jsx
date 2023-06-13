import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Collet jean-patrick",
  description: "Developpeur web FrontEnd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
