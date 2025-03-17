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
<<<<<<< HEAD
        <body>{children}</body>
=======
        <body>
          <>{children}</>
        </body>
>>>>>>> 9d7cd548092b036a9c7c08a648c14627aad63252
      </html>
    );
  }

  return (
    <html lang="fr">
      <body>
<<<<<<< HEAD
        <div className="grid grid-cols-4 h-screen bg-gradient-to-r from-blue-400 to-blue-950">
          <div className="col-span-1">
            <SideBar />
          </div>
          <div className="col-span-3">{children}</div>
=======
        <div className="grid grid-cols-4 h-screen bg-gradient-to-r from-blue-400 to-blue-95">
          <div className="flex col-span-1 items-center">
            <SideBar />
          </div>
          <div className="flex col-span-3 items-center justify-center">
            {children}
          </div>
>>>>>>> 9d7cd548092b036a9c7c08a648c14627aad63252
        </div>
      </body>
    </html>
  );
}
