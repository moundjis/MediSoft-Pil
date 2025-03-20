import React from 'react';

export default function PharmacieGabarit({ pharmacie, onDetail }) {
    console.log("Pharmacie reçue :", pharmacie); // Vérifiez les données ici
    const { nom, adresse, telephone, email   } = pharmacie;

    return (
        <tr>
            
            <td className="px-4">{nom}</td>
            <td className="px-4">{adresse}</td>
            <td className="px-4">{telephone}</td>
            <td className="px-4">{email}</td>
            
            <td>
                <button onClick={onDetail}>Détails</button>
            </td>
        </tr>
    );
}