export default function Action() {
  return (
    <div className="flex flex-col">
      <button className="text-white text-sm bg-blue-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600">
        Detail
      </button>
      <button className="text-white text-sm bg-blue-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600">
        Modifier
      </button>
      <button className="text-white text-sm bg-blue-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600">
        supprimer
      </button>
    </div>
  );
}
