import React, { useState, useEffect } from "react";


const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((valorPrevio) => valorPrevio + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []); // Solo se ejecuta al montar el componente

  const cadenaDigitos = seconds.toString().padStart(6, "0");

  return (
      <div id="counter">
        {/* Ícono FontAwesome */}
        <i className="fa-regular fa-clock fa-lg" style={{ color: "#ffffff"}}></i>
    
        {/* Dígitos */}
        {cadenaDigitos.split("").map((digit, index) => (
          <div key={index} className="digit">
            {digit}
          </div>
          
        ))}
      </div>
    );
    
};

export default SecondsCounter;