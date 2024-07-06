"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Segurisima?",
      "podemos recurrir a otras cosas",
      "Obi parfavaaaar",
      "Cmuere",
      "Kdolor",
      "lloran2",
      "Pero Obiiii",
      "Perdoooooooom",
      "Invitamos unos abracitos",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media2.giphy.com/media/2Hu0PKkZTtyaA/giphy.gif" />
          <div className="my-4 text-4xl font-bold">TE ADORO! Gracias, eres lo max! nos encanta! perdom</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://i.pinimg.com/originals/0a/9e/20/0a9e204e822a0df591e8a3073b2368c5.gif"
          />
          <h1 className="my-4 text-4xl">Obi, meperdonas?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Obio
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
