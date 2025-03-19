import React from 'react';

export default function ConsultationGabarit({ consultation, onDetail }) {
    console.log("Consultation reçue :", consultation); // Vérifiez les données ici
    const { diagnostic, note, recommendations  } = consultation;

    return (
        <tr>
            
            <td className="px-4">{diagnostic}</td>
            <td className="px-4">{note}</td>
            <td className="px-4">{recommendations}</td>
            
            
            <td>
                <button onClick={onDetail}>Détails</button>
            </td>
        </tr>
    );
}