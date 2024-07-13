import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FU_img from "./images/Fitness-Urban-img.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import "./Animations.css"; 
import { useInView } from "react-intersection-observer";

function About() {
  
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true, threshold: 0.2 });


  return (
    <div className="flex-col flex-grow gap-1">
      <Navbar />
      <div className="flex-col flex-grow mt-40 md:mx-16 mx-7 lg:grid-cols-2 lg:grid bg-zinc-950 rounded-3xl">
        <div className="w-full h-auto p-10">
          <h1 ref={ref1} className={`xl:text-6xl md:text-4xl text-3xl font-semibold text-white ${inView1 ? 'fade-in' : 'fade-out'}`}>
            Ce este Fitenss Urban?
          </h1>
          <br /><br />
          <span ref={ref2} className={`w-56 space-y-5 md:text-xl text-lg text-white ${inView2 ? 'fade-in' : 'fade-out'}`}>
            Fitness Urban Romania este o comunitate dedicată antrenamentelor în aer liber. Aceasta oferă diverse sesiuni de fitness și programe de antrenament personalizate care se desfășoară în spații deschise. Scopul lor este de a crea un mediu motivant și de susținere, unde membrii pot să-și atingă obiectivele de sănătate și fitness într-un mod natural și dinamic.
          </span>
        </div>
        <div className="flex justify-center bg-black border-2 rounded-3xl lg:px-0 lg:flex lg:py-16 border-zinc-950">
          <img ref={ref3} src={FU_img} alt="fitness_urban_image" className={`lg:h-auto h-56 ${inView3 ? 'fade-in' : 'fade-out'}`} />
        </div>
      </div>
      <div className="flex-row flex-grow my-32 lg:border-0 md:mx-16 mx-7 lg:grid-cols-1 lg:grid bg-zinc-950 rounded-3xl">
        <div className="w-full h-auto p-10">
          <h1 ref={ref4} className={`md:text-6xl text-3xl font-semibold text-white ${inView4 ? 'fade-in' : 'fade-out'}`}>
            De ce să te alături Fitness Urban?
          </h1>
          <br /><br />
          <div ref={ref5} className={`w-full space-y-5 md:text-xl text-lg text-white ${inView5 ? 'fade-in' : 'fade-out'}`}>
            <h1 className="text-xl font-semibold">1. Antrenamente în aer liber:</h1>
            <p className="mx-5 text-lg">
              Fitness Urban oferă sesiuni de antrenament desfășurate în aer liber, oferindu-ți posibilitatea de a te bucura de natură în timp ce îți îmbunătățești condiția fizică.
            </p>
            <h1 className="text-xl font-semibold">2. Comunitate și suport:</h1>
            <p className="mx-5 text-lg">
              Alăturându-te Fitness Urban, faci parte dintr-o comunitate unită care se susține reciproc. Acest mediu de susținere te va încuraja să rămâi motivat și dedicat obiectivelor tale de fitness.
            </p>
            <h1 className="text-xl font-semibold">3. Varietate de antrenamente:</h1>
            <p className="mx-5 text-lg">
              Fitness Urban organizează o gamă largă de sesiuni de antrenament variate, asigurându-se că antrenamentele sunt mereu interesante și provocatoare, prevenind monotonia.
            </p>
            <h1 className="text-xl font-semibold">4. Flexibilitate și accesibilitate:</h1>
            <p className="mx-5 text-lg">
              Sesiunile de antrenament sunt flexibile și accesibile, potrivindu-se diferitelor nevoi și preferințe ale membrilor. Poți participa la antrenamente în diverse locații și la ore convenabile pentru tine.
            </p>
            <h1 className="text-xl font-semibold">5. Evenimente speciale:</h1>
            <p className="mx-5 text-lg">
              Fitness Urban organizează competiții de street workout și alte evenimente speciale, oferind membrilor oportunitatea de a-și testa abilitățile și de a se bucura de un sentiment de realizare în cadrul competițiilor prietenoase.
            </p>
          </div>
          <br /><br />
          <div className="flex flex-col items-center justfy-center space-y-14">
            <img ref={ref6} src={img1} alt="fitness-urban-2" className={`h-auto lg:h-96 max-w-2xl w-full ${inView6 ? 'fade-in' : 'fade-out'}`}/>
            <img ref={ref7} src={img2} alt="fitness-urban-1" className={`h-auto lg:h-96 max-w-2xl w-full ${inView7 ? 'fade-in' : 'fade-out'}`}/>
            <img ref={ref8} src={img3} alt="fitnes-urban-competition" className={`h-auto lg:h-96 max-w-2xl w-full ${inView8 ? 'fade-in' : 'fade-out'}`}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
