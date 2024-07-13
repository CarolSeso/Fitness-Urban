import React from "react";

export default function PremadeWkCard({ exercise }) {
  return (
    <div className="relative rounded-lg shadow-xl bg-zinc-800">
      <img className="w-full rounded-t-lg" src={exercise.imageURL} alt={exercise.name} />
      <div className="w-full px-2 mt-5 text-sm mb-14"><br />
        <p className="text-white">Nume: {exercise.name}</p><br />
        <p className="text-white">Tip: {exercise.type}</p><br />
        <p className="text-white">Grupe de mușchi: {exercise.muscleGroups}</p>
      </div>
      <a href={exercise.exerciseLink}>
        <button
          className="absolute bottom-0 w-full h-10 mt-32 text-white transition duration-100 bg-blue-700 border-2 border-blue-700 rounded-b-lg hover:text-blue-700 hover:bg-neutral-800"
          type="submit"
        >
          Videoclip
        </button>
      </a>
    </div>
  );
}
