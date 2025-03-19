export default function ActionBtn({ onDetail, onModifier, onSupprimer }) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onDetail}
        className="text-white text-sm bg-green-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600"
      >
        Détail
      </button>
      <button
        onClick={onModifier}
        className="text-white text-sm bg-orange-400 px-2 mb-2 hover:cursor-pointer hover:bg-blue-600"
      >
        Modifier
      </button>
      <button
        onClick={onSupprimer}
        className="text-white text-sm bg-red-400 px-2 hover:cursor-pointer hover:bg-blue-600"
      >
        Supprimer
      </button>
    </div>
  );
}
