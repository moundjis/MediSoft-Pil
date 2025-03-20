import React from 'react';

export default function RendezVousGabarit({ rendezVou, onDetail }) {
    console.log("Rendez Vous reçue :", rendezVou); // Vérifiez les données ici
    const { date_rdv, heure_rdv, type_rdv, status_rdv,id_patient   } = rendezVou;

    return (
        <tr>
            
            <td className="px-4">{date_rdv}</td>
            <td className="px-4">{heure_rdv}</td>
            <td className="px-4">{type_rdv}</td>
            <td className="px-4">{status_rdv}</td>
            <td className="px-4">{id_patient}</td>
            <td>
                <button onClick={onDetail}>Détails</button>
            </td>
        </tr>
    );
}