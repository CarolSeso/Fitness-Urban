import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PremadeWkCard from "./PremadeWkCard.jsx";
import { TiDelete } from "react-icons/ti";
import { fetchProposedWorkouts } from "../axios-client.js"; // Adjust this import if needed

export default function Propuse() {
  const [workouts, setWorkouts] = useState([]);
  const [dropDown, setDropdown] = useState(false);

  // Fetch proposed workouts on component mount
  useEffect(() => {
    async function getWorkouts() {
      try {
        const response = await fetchProposedWorkouts();
        setWorkouts(response.data);
      } catch (error) {
        console.error("Error fetching proposed workouts:", error);
      }
    }
    getWorkouts();
  }, []);

  function changeDropdown() {
    setDropdown(!dropDown);
  }

  return (
    <div className="relative w-full h-auto shadow-2xl bg-neutral-900 rounded-2xl">
      {workouts.map((antrenament) => (
        <div key={antrenament.id} className="w-full h-auto px-5 pt-5 text-white">
          <h1 className="text-3xl lg:text-5xl">{antrenament.name}</h1>
          <br />
          <h1 className="text-lg">Exercitii incluse:</h1>
          <ol className="pt-2">
            {antrenament.exercises.map((exercise, index) => (
              <li key={exercise.id} className="ml-5 text-sm">
                - {exercise.name}
              </li>
            ))}
          </ol>
          <br />
          {dropDown && (
            <div className="grid w-full h-auto px-10 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
              {antrenament.exercises.map((exercise) => (
                <PremadeWkCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          )}
          <IoIosArrowDown
            onClick={changeDropdown}
            className={`absolute bottom-4 left-4 text-white transition-all ${
              dropDown && "rotate-180"
            } duration-300 w-7 h-7 hover:text-lime-600`}
          />
        </div>
      ))}
    </div>
  );
}
