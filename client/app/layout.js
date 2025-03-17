"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar/SideBar";
import { usePathname } from "next/navigation";

// const geist = Geist({ subsets: ["latin"] });
// const geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata = {
//   title: "MediSoft",
//   description: "Application web de gestion de dossiers médicaux",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <html lang="fr">
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="fr">
      <body>
        <div className="grid grid-cols-4 h-screen bg-gradient-to-r from-blue-400 to-blue-950">
          <div className="col-span-1">
            <SideBar />
          </div>
          <div className="col-span-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
