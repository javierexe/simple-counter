import React, { useState, useEffect } from "react";



const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setSeconds((valorPrevio) => valorPrevio + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const cadenaDigitos = seconds.toString().padStart(6, "0");



  return (
      <div id="counter">
        {/* Ícono Reloj */}
        <i className="fa-regular fa-clock fa-lg m-2" style={{ color: "#ffffff"}}></i>
    
        {/* Segundos */}
        {cadenaDigitos.split("").map((digit, index) => (
          <div key={index} className="digit">
            {digit}
          </div>
          
        ))}
      </div>
    );
    
};

export default SecondsCounter;