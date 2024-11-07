import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fb from './images/Fitness-Urban-Logo.png';
import { HiMenu } from "react-icons/hi";
import { MdClear } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { useStateContext } from "../context/context";
import axiosClient from "../axios-client";

function NavbarDefault() {
  const [ecranMare, setEcranMAre] = useState(window.innerWidth >= 1050);
  const [menuButton, setMenuButton] = useState(false);
  const [inMenu, setInMenu] = useState(false);
  const [inMenu2, setInMenu2] = useState(false);
  const [inMenu3, setInMenu3] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, token, setUser, setToken } = useStateContext();
  const navigate = useNavigate();


  const onLogout = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      await axiosClient.post('/logout');
      setUser({});
      setToken(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    axiosClient.get('/user').then(({ data }) => {
      setUser(data);
    });
  }, []);


  const changeInMenu = () => setInMenu(!inMenu);
  const changeInMenu2 = () => setInMenu2(!inMenu2);
  const changeInMenu3 = () => setInMenu3(!inMenu3);
  const changeMenuButton = () => setMenuButton(!menuButton);


  useEffect(() => {
    const changeEcranMare = () => {
      setEcranMAre(window.innerWidth >= 1050);
    };
    window.addEventListener('resize', changeEcranMare);
    return () => window.removeEventListener('resize', changeEcranMare);
  }, []);

  return (
    <>
      {ecranMare ? (
        <div className="fixed z-10 grid w-full grid-cols-4 p-2 bg-black border-b-2 border-neutral-800">
          <img className="h-28" src={fb} alt="Logo" />
          <div className="flex items-center col-span-3 mx-14">
            <Link to="/home" className="mx-12 text-3xl text-white transition-all duration-150 hover:text-4xl hover:border-b-4 hover:border-lime-400 hover:text-lime-400">Home</Link>
            <Link to="/about" className="mx-12 text-3xl text-white transition-all duration-150 hover:text-4xl hover:border-b-4 hover:border-lime-400 hover:text-lime-400">About Us</Link>
            <Link to="/workout" className="mx-12 text-3xl text-white transition-all duration-150 hover:text-4xl hover:border-b-4 hover:border-lime-400 hover:text-lime-400">Workouts</Link>
            <div className="mx-12 text-3xl text-white transition-all duration-150 hover:text-4xl hover:border-b-4 hover:border-lime-400 hover:text-lime-400">{user.name}</div>
          </div>
          <div className="absolute flex flex-col gap-4 bg-black xl:flex-row w-76 top-5 right-5 xl:top-12 xl:right-10">
            <a href="#" onClick={onLogout} className="flex justify-center align-center mb-3 space-x-3 w-24 p-1 font-semibold text-black transition-all duration-75 rounded-full ease-inf bg-lime-400 hover:text-white hover:border-lime-800 hover:bg-lime-800">
              {loading ? "Logging out..." : "Logout"}
            </a>
          </div>
        </div>
      ) : (
        <div className="fixed z-10 flex justify-center w-full bg-black border-b-2 border-neutral-800">
          <img className="h-28 rounded-3xl" src={fb} alt="Logo" />
          {!menuButton ? (
            <HiMenu onClick={changeMenuButton} className="absolute text-white transition-all duration-50 w-14 h-14 right-7 top-7 hover:text-lime-400" />
          ) : (
            <div className="fixed top-0 right-0 z-10 h-full grid-flow-row gap-10 text-white bg-black border-l-2 border-neutral-800 w-80">
              <div className="w-auto h-auto mt-2 ml-2 text-white bg-black">
                <MdClear onClick={changeMenuButton} className="w-10 h-10 text-white transition-all duration-75 bg-black hover:text-lime-400" />
              </div>
              <br /><hr className="border-2 border-neutral-800"/><br />
              <div className="relative inline w-full">
                <Link to="/home" onMouseOver={changeInMenu} onMouseOut={changeInMenu} onClick={() => { changeMenuButton(); changeInMenu(); }} className="mx-5 text-xl text-white transition-all duration-75 hover:border-b-2 hover:border-lime-400 hover:text-lime-400">Home</Link>
                {inMenu ? <IoIosArrowForward className="absolute top-1 left-20 text-lime-400" /> : null}
              </div>
              <br /><br /><hr className="border-2 border-neutral-800" /><br />
              <div className="relative inline w-full">
                <Link to="/about" onMouseOver={changeInMenu2} onMouseOut={changeInMenu2} onClick={() => { changeMenuButton(); changeInMenu2(); }} className="mx-5 text-xl text-white transition-all duration-75 hover:border-b-2 hover:border-lime-400 hover:text-lime-400">About us</Link>
                {inMenu2 ? <IoIosArrowForward className="absolute top-1 left-28 text-lime-400" /> : null}
              </div>
              <br /><br /><hr className="border-2 border-neutral-800" /><br />
              <div className="relative inline w-full">
                <Link to="/workouts" onMouseOver={changeInMenu3} onMouseOut={changeInMenu3} onClick={() => { changeMenuButton(); changeInMenu3(); }} className="mx-5 text-xl text-white transition-all duration-75 hover:border-b-2 hover:border-lime-400 hover:text-lime-400">Workouts</Link>
                {inMenu3 ? <IoIosArrowForward className="absolute top-1 left-28 text-lime-400" /> : null}
              </div>
              <br /><br /><hr className="border-2 border-neutral-800" /><br />
              <div className="relative">
                <div className="flex items-center mb-3 space-x-3">
                  <span className="ml-5 text-lg text-white">Social</span>
                  <a href="https://www.facebook.com/FitnessUrbanRomania"><FaFacebookSquare className="text-blue-800 transition-all duration-200 rounded-md w-7 h-7 hover:bg-white" /></a>
                  <a href="https://www.youtube.com/@DORUDOROBAT"><FaYoutube className="w-10 text-red-900 transition-all duration-200 rounded-lg h-7 hover:bg-white" /></a>
                </div>
              </div>
              <div className="absolute right-0 flex flex-row w-56 gap-3 bg-black top-2">
                <a href="#" onClick={onLogout} className="flex items-center mb-3 space-x-3 w-24 p-1 font-semibold text-black transition-all duration-75 rounded-full ease-inf bg-lime-400 hover:text-white hover:border-lime-800 hover:bg-lime-800">
                  {loading ? "Logging out..." : "Logout"}
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NavbarDefault;
