import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Postare from "./Postare.jsx";
import postari from "./postari.js";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex-col flex-grow mb-40">
        <div className="p-6 mt-40">
          <h1 className="px-5 text-5xl font-semibold text-white">
            Fii la curent cu toate evenimante organizate de Fitness Urban
          </h1>
          <br /><br /><br /><br />
          <br />
          {postari.map((element, index) => (
            <div>
              <Postare 
                key={index}
                title={element.title}
                content={element.content}
                imageURL={element.imageURL}
                link={element.link}
              />
              <br /><br /><br /><br /><br />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
