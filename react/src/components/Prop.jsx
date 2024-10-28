import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PremadeWkCard from "./PremadeWkCard.jsx";
import exercises from "./exercises.js";
import { TiDelete } from "react-icons/ti";


export default function Propuse({ antrenament }) {
  const [dropDown, setDropdown] = useState(false);

  function changeDropdown() {
    setDropdown(!dropDown);
  }

  return (
    <div className="relative w-full h-auto shadow-2xl bg-neutral-900 rounded-2xl">
      <div className="w-full h-auto px-5 pt-5 text-white">
        <h1 className="text-3xl lg:text-5xl">{antrenament.name}</h1>
        <br />
        <h1 className="text-lg">Exercitii incluse:</h1>
        <ol className="pt-2">
          {antrenament.exercitii.map((exerciseId, index) => {
            const exercise = exercises.find((ex) => ex.id === exerciseId);
            return (
              <li key={index} className="ml-5 text-sm">
                - {exercise.name}
              </li>
            );
          })}
        </ol>
      </div>
      <br />
      {dropDown && (
        <div className="grid w-full h-auto px-10 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {antrenament.exercitii.map((exerciseId) => {
            const exercise = exercises.find((ex) => ex.id === exerciseId);
            return <PremadeWkCard key={exercise.id} exercise={exercise} />;
          })}
        </div>
      )}
      <br />
      <IoIosArrowDown
        onClick={changeDropdown}
        className={`absolute bottom-4 left-4 text-white transition-all ${
          dropDown && "rotate-180"
        } duration-300 w-7 h-7 hover:text-lime-600`}
      />
    </div>
  );
}
