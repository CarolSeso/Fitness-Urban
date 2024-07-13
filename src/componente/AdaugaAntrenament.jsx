import React, { useState } from "react";
import exercises from "./exercises.js";
import NewWkCard from "./NewWkCard.jsx";
import { v4 as uuidv4 } from 'uuid';

export default function AdaugaAntrenament({
  exList,
  nou,
  updateList,
  deleteEx,
  changeNou,
  wkName,
  changeWkName,
  updateAntrenament,
  setWkName
}) {
  const [exName, setExName] = useState("");
  const result = exercises.filter((element) =>
    element.name.toLowerCase().includes(exName.toLowerCase())
  );

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="h-auto mt-10">
      <h1 className="text-6xl text-white">Antrenament Nou:</h1>
      <form
        className="h-auto mt-3 text-white p-7 rounded-xl bg-neutral-900"
        onSubmit={handleFormSubmit}
      >
        <div className="w-full h-auto">
          <h1 className="text-xl mb-7 md:text-2xl">Numele antrenamentului:</h1>
          <input
            onChange={changeWkName}
            className="w-full h-10 p-4 rounded-md md:w-96 bg-neutral-800"
            type="text"
            name="workoutName"
            value={wkName}
            placeholder="Nume antrenament"
          />
          <br /><br />
          <h1 className="text-xl md:text-2xl">Adauga exercitii:</h1>
          <br /><br />
          <div className="w-full h-10 px-7">
            <input 
              onChange={(e) => setExName(e.target.value)} 
              className="w-full h-full p-4 rounded-md md:w-96 bg-neutral-800" 
              type="text" 
              name="searchExercise" 
              value={exName} 
              placeholder="Caută exercițiul dorit"/>
          </div>
          <br /><br />
          <div className="grid w-full h-auto px-10 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
            {result.map((element) => (
              <NewWkCard
                key={element.id}
                exList={exList}
                exercise={element}
                updateList={updateList}
                deleteEx={deleteEx}
              />
            ))}
          </div>
        </div>
      </form>
      {nou ? (
        <div className="grid grid-cols-2 gap-7">
          <button
            onClick={changeNou}
            className="w-full py-2 font-semibold text-white transition-all duration-100 bg-red-700 border-2 border-red-700 rounded-lg mt-7 hover:text-red-700 hover:bg-black"
          >
            Anulare antrenament
          </button>
          <button
            onClick={() =>
              updateAntrenament({
                id: uuidv4(),
                name: wkName,
                exercitii: exList,
              })
            }
            className="w-full py-2 font-semibold text-white transition-all duration-100 border-2 rounded-lg bg-lime-600 mt-7 hover:text-lime-600 border-lime-600 hover:bg-black"
          >
            Adaugare antrenament
          </button>
        </div>
      ) : null}
    </div>
  );
}
