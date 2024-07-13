import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function NewWkCard({ exList, exercise, updateList, deleteEx }) {
  return (
    <div className="relative rounded-lg shadow-xl bg-zinc-800">
      <img
        className="w-full rounded-t-lg"
        src={exercise.imageURL}
        alt={exercise.name}
      />
      {exList.includes(exercise.id) ? (
        <FaCheckCircle className="absolute bg-white top-2 right-2 rounded-xl h-7 w-7 text-lime-600" />
      ) : null}
      <div className="w-full px-2 mt-5 text-sm mb-36">
        <p className="text-white">Nume: {exercise.name}</p>
        <br />
        <p className="text-white">Tip: {exercise.type}</p>
        <br />
        <p className="text-white">Grupe de mușchi: {exercise.muscleGroups}</p>
      </div>
      <button
        onClick={() => deleteEx(exercise.id)}
        className="absolute w-full h-10 mt-32 text-white transition duration-100 bg-red-700 border-2 border-red-700 bottom-20 hover:text-red-700 hover:bg-neutral-800"
      >
        Șterge
      </button>
      <button
        onClick={() => updateList(exercise.id)}
        className="absolute w-full h-10 mt-32 text-white transition duration-100 border-2 bottom-10 bg-lime-700 hover:text-lime-700 hover:bg-neutral-800 border-lime-700"
      >
        Adaugă
      </button>
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
