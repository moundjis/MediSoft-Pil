"use client"; // Indiquer que ce composant est un composant client

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConnexionForm() {
  // États pour stocker les valeurs des champs de formulaire
  const [courriel, setCourriel] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Nouvel état pour gérer le chargement
  const [error, setError] = useState(""); // Nouvel état pour gérer les erreurs
  const router = useRouter(); // Hook useRouter pour la navigation

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

    setLoading(true); // Démarrer le chargement
    setError(""); // Réinitialiser l'erreur avant chaque tentative

    try {
      // Envoi des données au backend
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Définir le type de contenu comme JSON
        },
        body: JSON.stringify({ courriel, password }), // Convertir les données en JSON pour l'envoi
      });

      const data = await response.json(); // Traiter la réponse du serveur

      setLoading(false); // Fin du chargement

      if (response.ok) {
        // Si la connexion est réussie
        console.log("Connexion réussie:", data);
        router.push("/dashboard"); // Rediriger vers la page dashboard
      } else {
        // Si le serveur renvoie une erreur
        setError(data.message || "Une erreur s'est produite"); // Afficher le message d'erreur
        console.error("Erreur:", data.message);
      }
    } catch (error) {
      // Gestion des erreurs réseau ou inattendues
      setLoading(false); // Fin du chargement en cas d'erreur
      setError("Une erreur réseau est survenue. Veuillez réessayer."); // Message d'erreur général
      console.error("Erreur réseau:", error);
    }
  };

  return (
    <main>
      {/* Formulaire de connexion */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Champ pour l'adresse e-mail */}
        <input
          value={courriel} // Valeur liée à l'état courriel
          onChange={(e) => setCourriel(e.target.value)} // Met à jour l'état courriel
          type="text"
          placeholder="E-mail"
          className="border-b-1 border-white/50 text-white p-1 placeholder-white focus:outline-none"
        />
        {/* Champ pour le mot de passe */}
        <input
          value={password} // Valeur liée à l'état password
          onChange={(e) => setPassword(e.target.value)} // Met à jour l'état password
          type="password"
          placeholder="Mot de passe"
          className="border-b-1 border-white/50 text-white p-1 placeholder-white focus:outline-none"
        />
        {/* Affichage du message d'erreur */}
        {error && <p className="text-red-500">{error}</p>}
        {/* Bouton de soumission */}
        <button
          type="submit"
          className="bg-blue-400 p-2 rounded-md drop-shadow-[5px_6px_6px_rgba(0,0,0,0.5)] self-end hover:cursor-pointer w-[150px]"
          disabled={loading} // Désactiver le bouton pendant le chargement
        >
          {loading ? "Chargement..." : "Se connecter"}{" "}
          {/* Texte du bouton selon l'état de chargement */}
        </button>
      </form>
    </main>
  );
}
