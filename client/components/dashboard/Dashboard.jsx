"use client";
import dashboard from "@/public/data/dashboard.json";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Importation des nombres d'elements pour chaque Categorie
import { getEmployeCount } from "@/components/Employes/Employes";
// import { getPatientCount } from "@/components/Employes/Patients";
// import { getConsultationCount } from "@/components/Consultations/Consultations";
// import { getPrescriptionCount } from "@/components/Prescriptions/Prescriptions";
// import { getOrdonnanceCount } from "@/components/Ordonnances/Ordonnances";
// import { getRendezVousCount } from "@/components/RendezVous/RendezVous";
// import { getPharmacieCount } from "@/components/Pharmacies/Pharmacies";
import { getRoleCount } from "@/components/Roles/Roles";

import {
  LuHouse,
  LuShoppingCart,
  LuClipboardList,
  LuFileText,
  LuUsers,
  LuCalendar,
  LuUserCog,
  LuLogOut,
} from "react-icons/lu";

const iconComponents = {
  LuHouse: LuHouse,
  LuShoppingCart: LuShoppingCart,
  LuClipboardList: LuClipboardList,
  LuFileText: LuFileText,
  LuUsers: LuUsers,
  LuCalendar: LuCalendar,
  LuUserCog: LuUserCog,
  LuLogOut: LuLogOut,
};

export default function Dashboard() {
  const [counts, setCounts] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetchCounts();
  }, []);

  async function fetchCounts() {
    try {
      const countsData = {
        1: await getEmployeCount(),
        // 2: await getPatientCount(),
        // 3: await getConsultationCount(),
        // 4: await getPrescriptionCount(),
        // 5: await getOrdonnanceCount(),
        // 6: await getRendezVousCount(),
        // 7: await getPharmacieCount(),
        8: await getRolesCount(),
      };
      setCounts(countsData);
    } catch (error) {
      console.error("Error fetching counts:", error.message);
    }
  }

  return (
    <div className="h-[85vh] w-full bg-white grid grid-cols-3 gap-5 rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-10">
      {dashboard.map((dashboardItem) => {
        const IconComponent = iconComponents[dashboardItem.icon];
        const count = counts[dashboardItem.id] || 0; // Par défaut, 0 si pas encore chargé

        return (
          <div
            key={dashboardItem.id}
            className="flex flex-col items-center justify-center p-5 bg-white cursor-pointer text-black hover:bg-gray-200 rounded-md drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)]"
            onClick={() => router.push(dashboardItem.lien)}
          >
            {IconComponent && <IconComponent className="w-8 h-8 mb-2" />}{" "}
            {/* Icone plus grande */}
            <span className="text-lg font-semibold">
              {dashboardItem.name}
            </span>{" "}
            {/* Titre de la catégorie */}
            <span className="mt-2 text-3xl font-bold text-blue-500">
              {count}
            </span>{" "}
            {/* Nombre en gros */}
          </div>
        );
      })}
    </div>
  );
}
