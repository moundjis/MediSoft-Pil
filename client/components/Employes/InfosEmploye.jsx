import employesDetails from "@/public/data/employesDetails.json";

export default function InfosEmploye() {
  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10">
      <h1 className="font-bold text-2xl text-black py-2">
        Détails de l'employé
      </h1>
      <div className="h-full flex flex-col justify-around">
        {employesDetails.map((details) => (
          <p key={details.id} className="font-semibold">
            {details.name}
          </p>
        ))}
      </div>
    </div>
  );
}
