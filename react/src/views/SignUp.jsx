import React, { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/context";

export default function SignUp() {
  const [passwordButton, setPasswordButton] = useState(false);

  const changePasswordButton = () => {
    setPasswordButton(!passwordButton);
  }

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const {setUser, setToken} = useStateContext();

  const [errors,setErrors] = useState(null)

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
    }
    console.log('Submitting payload:', payload);
    axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err =>{
            console.error('Error during signup:', err);
            const response = err.response;
            if(response && response.status === 422){
                console.log(response.data.errors);
                setErrors(response.data.errors);
            }
        })
}

  return (
    <div className="absolute flex items-center justify-center w-full h-full px-4 py-10 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-zinc-900">
      <div className="relative w-full max-w-3xl p-10 text-white bg-black rounded-3xl">
        <Link to="/home">
          <button className="absolute flex items-center text-lg top-7 left-7 text-lime-400">
            <FaArrowLeft className="w-4 h-4 mr-2 text-lime-400" />
            <span>Acasă</span>
          </button>
        </Link>
        <h1 className="text-4xl font-semibold text-center text-white md:text-5xl lg:text-6xl">Sign Up</h1>
        <br /><br />
        <form className="px-4 sm:px-8 md:px-16 lg:px-20" onSubmit={onSubmit}>

        {errors &&
            <div className="flex items-center mb-3 space-x-3 text-lime-400 w-full h-12 pl-4 rounded-lg bg-neutral-800">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }

        <h1 className="my-3 text-xl sm:text-2xl md:text-3xl">Nume</h1>
          <input ref={nameRef} required className="w-full h-12 pl-4 rounded-lg bg-neutral-800" type="text" placeholder="nume" />
          <br /><br />

          <h1 className="my-3 text-xl sm:text-2xl md:text-3xl">Email</h1>
          <input ref={emailRef} required className="w-full h-12 pl-4 rounded-lg bg-neutral-800" type="email" placeholder="email" />
          <br /><br />
          <h1 className="my-3 text-xl sm:text-2xl md:text-3xl">Parolă</h1>
          <div className="relative">
            <input
              ref={passwordRef}
              required
              className="w-full h-12 pl-4 rounded-lg bg-neutral-800"
              type={passwordButton ? "text" : "password"}
              placeholder="parolă"
            />
            {
              passwordButton ?
              <button>
                <BiSolidShow onClick={changePasswordButton} className="absolute w-5 h-5 top-4 right-4 text-neutral-400"/>
              </button>
              :
              <button>
                <BiSolidHide onClick={changePasswordButton} className="absolute w-5 h-5 top-4 right-4 text-neutral-400"/>
              </button>
            }
          </div>
          <br />
          <Link to="/login">
            <button className="text-lime-400">Ai deja un cont? Autentifică-te</button>
          </Link>
          <br /><br />
          <button type="submit" className="w-full p-2 font-semibold text-black transition-all duration-75 rounded-full ease-inf bg-lime-400 border-lime-400 hover:border-lime-800 hover:text-white hover:bg-lime-800">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
