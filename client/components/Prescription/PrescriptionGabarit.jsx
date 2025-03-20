import React from 'react';

export default function PrescriptionGabarit({ prescription, onDetail }) {
    console.log("prescription reçue :", prescription); // Vérifiez les données ici
    const { medicament, dosage, quantite, note_medecin   } = prescription;

    return (
        <tr>
            
            <td className="px-4">{medicament}</td>
            <td className="px-4">{dosage}</td>
            <td className="px-4">{quantite}</td>
            <td className="px-4">{note_medecin}</td>
            
            <td>
                <button onClick={onDetail}>Détails</button>
            </td>
        </tr>
    );
}