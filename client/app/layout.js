import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "MediSoft",
  description: "Application web pour gestion des dossiers medicaux",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
