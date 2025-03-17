import roles from "@/public/data/roles";

export default function Roles() {
  return (
    <div className="h-full bg-white rounded-2xl drop-shadow-[5px_5px_3px_rgba(0,0,0,0.5)] p-15 mr-5 mt-10 mb-10">
      <h1 className="font-bold text-2xl text-black py-2">Liste des roles</h1>
      <button className="text-white text-sm bg-blue-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600">
        Ajouter
      </button>
      <table className="w-full">
        <thead>
          <tr className="bg-yellow-400">
            {roles.map((role) => (
              <th
                key={role.id}
                className="px-4 py-3 text-left text-sm font-medium text-white border border-3"
              >
                {role.name}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}
