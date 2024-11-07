import React, { useState, useEffect } from "react";
import Propuse from "../components/Prop.jsx";
import Personalizate from "../components/Personalizate.jsx";
import AdaugaAntrenament from "../components/AdaugaAntrenament.jsx";
import {
    fetchProposedWorkouts,
    fetchPersonalWorkouts,
    createPersonalWorkout,
    deletePersonalWorkout,
} from '../axios-client.js';

export default function WorkoutPage() {
  const [wkName, setWkName] = useState("");
  const [nou, setNou] = useState(false);
  const [exList, setExList] = useState([]);
  const [antrenamente, setAntrenamente] = useState([]);
  const [antrenamentNou, setAntrenamentNou] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
        setIsLoading(true);
        const [proposedResponse, personalResponse] = await Promise.all([
            fetchProposedWorkouts(),
            fetchPersonalWorkouts(),
        ]);
        setAntrenamente(proposedResponse.data);
        setAntrenamentNou(personalResponse.data);
        setError(null);
    } catch (error) {
        console.error('Error fetching workouts:', error);
        setError('Failed to fetch workouts. Please try again later.');
    } finally {
        setIsLoading(false);
    }
};

  const changeWkName = (e) => {
    setWkName(e.target.value);
  };

  const updateAntrenament = async (el) => {
    try {
        const response = await createPersonalWorkout(el);
        setAntrenamentNou([...antrenamentNou, response.data]);
        setNou(false);
    } catch (error) {
        console.error('Error adding workout:', error);

    }
};

const deleteAntrenament = async (id) => {
    try {
        await deletePersonalWorkout(id);
        const updatedAntrenamentNou = antrenamentNou.filter(
            (element) => element.id !== id
        );
        setAntrenamentNou(updatedAntrenamentNou);
    } catch (error) {
        console.error('Error deleting workout:', error);

    }
};

  const changeNou = () => {
    setExList([]);
    setNou(!nou);
  };

  const updateList = (ex) => {
    setExList([...exList, ex]);
  };

  const deleteEx = (exId) => {
    const newList = exList.filter((element) => element !== exId);
    setExList(newList);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="flex-grow mb-40">
        <div className="mx-10 mt-40">
          <h1 className="text-2xl font-medium text-white">
            Aici veti gasi cateva antrenamente propuse de catre comunitate. Insa nu
            va limitati doar la acesea, intrucat puteti sa va creati propriile
            voastre antrenamente personalizate!
          </h1>
          <br />
          <br />
          <br />
          <h1 className="text-5xl text-white">Antrenamente propuse:</h1>
          <br />
          {antrenamente.map((element) => (
            <div key={element.id} className="mb-6">
              <Propuse antrenament={element} />
            </div>
          ))}
          <br /><br /><br />
          <hr />
          <br /><br /><br />
          <h1 className="text-5xl font-medium text-white">Antrenamentele Tale:</h1>
          <br />
          <p className="py-4 text-xl text-white">
            !!! Pentru a sterge un antrenament, apasati pe butonul roșu "X" !!!
          </p>
          <br />
          {!antrenamentNou.length ? (
            <h1 className="mb-10 text-2xl font-medium text-white">
              Momentan nu ai niciun antrenament personalizat!
            </h1>
          ) : (
            antrenamentNou.map((element) => (
              <div key={element.id}>
                <Personalizate
                  antrenament={element}
                  deleteAntrenament={deleteAntrenament}
                  antrenamentNou={antrenamentNou}
                />
                <br />
              </div>
            ))
          )}
          {nou ? (
            <div>
              <AdaugaAntrenament
                exList={exList}
                setExList={setExList}
                nou={nou}
                updateList={updateList}
                deleteEx={deleteEx}
                changeNou={changeNou}
                wkName={wkName}
                changeWkName={changeWkName}
                updateAntrenament={updateAntrenament}
                setWkName={setWkName}
              />
              <br /><br />
            </div>
          ) : null}
          {!nou ? (
            <button
              onClick={changeNou}
              className="w-full py-2 font-semibold transition-all duration-100 bg-white border-2 rounded-lg mt-7 hover:text-white hover:bg-black"
            >
              Antrenament nou
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
