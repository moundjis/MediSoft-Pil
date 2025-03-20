import patients from "@/public/data/patients.json";

export default function InfosPatient() {
  return (
    <div className="h-[85vh] w-[90vw] bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-10 flex flex-col">
      <div className="h-full">
        <h1 className="font-bold text-2xl text-black py-2">
          Détails du patient
        </h1>
        <div className="h-full flex flex-col justify-around">
          {patients.map((details) => (
            <p key={details.id} className="font-semibold">
              {details.name}
            </p>
          ))}
        </div>
      </div>
      <button className="text-white bg-blue-400 p-2 rounded-md drop-shadow-[5px_6px_6px_rgba(0,0,0,0.5)] self-end hover:cursor-pointer w-[150px]">
        Dossier Médical
      </button>
    </div>
  );
}
