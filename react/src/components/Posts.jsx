import React from "react";


export default function Postare({ title, content, imageURL, link}){
  return (
    <div className="flex flex-col w-full p-6 text-white border-2 border-neutral-600 rounded-2xl">
      <h1 className="mt-4 text-4xl font-semibold">{title}</h1>
      <br /><br /><hr className="bg-lime-400"/><br /><br />
      <p className="text-lg">
        {content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
        ))}
      </p>
      <br />
      <p>Pentru mai mutle, accesati linkul de mai jos:</p>
      <a href={link} className="text-lime-400">Acesati postarea completa</a>
      <br /><br /><br />
      <div className="flex justify-center">
        <img
          src={imageURL}
          alt="Image description"
          className="object-cover w-full h-auto max-w-md md:h-96"
        />
      </div>
    </div>
  );
}
