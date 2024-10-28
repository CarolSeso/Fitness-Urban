import React, { useState } from "react";
import antrenamente from "../components/antrenamente.js";
import Propuse from "../components/Prop.jsx";
import personale from "../components/personale.js";
import Personalizate from "../components/Personalizate.jsx";
import AdaugaAntrenament from "../components/AdaugaAntrenament.jsx";

export default function WorkoutPage() {
  const [wkName, setWkName] = useState(null);
  const [nou, setNou] = useState(false);
  const [exList, setExList] = useState([]);
  const [antrenamentNou, setAntrenamentNou] = useState(personale);

  function changeWkName(e) {
    setWkName(e.target.value);
  }

  function updateAntrenament(el) {
    const updatedAntrenamentNou = [...antrenamentNou, el];
    setAntrenamentNou(updatedAntrenamentNou);
    setNou(false);
  }

  function deleteAntrenament(id) {
    const updatedAntrenamentNou = antrenamentNou.filter(
      (element) => element.id !== id
    );
    setAntrenamentNou(updatedAntrenamentNou);
  }

  function changeNou() {
    setExList([]);
    setNou(!nou);
  }

  function updateList(ex) {
    setExList([...exList, ex]);
  }

  function deleteEx(exId) {
    const newList = exList.filter((element) => element !== exId);
    setExList(newList);
  }

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
          {antrenamente.map((element, index) => (
            <div key={index} className="mb-6">
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
              <div>
                <Personalizate
                  key={element.id}
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
                key={antrenamentNou.length}
                id={antrenamentNou.length}
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
