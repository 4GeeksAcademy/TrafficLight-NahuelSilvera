import React, { useState } from "react";

const colors = ["red", "yellow", "green", "purple"]; 

const Home = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const [isPurpleAdded, setIsPurpleAdded] = useState(false);


    // También es posible hacerlo con un switch case o un if else (Usando una doble validación en el green)
    // Usar un switch o if mejoraría el llamar a los colores por nombre y no por una posición, haciendo que sea más legible pero más largo el code.
    const toggleColor = () => {
        if (colors[colorIndex] === "purple" && isPurpleAdded) {
            setColorIndex(0); // Vuelve al rojo
        } else {
            setColorIndex((prevIndex) => {
                // Si el color es verde y púrpura está activado, cambia a púrpura
                if (colors[prevIndex] === "green" && isPurpleAdded) {
                    return colors.indexOf("purple");
                }
                // Si el rango termina regresa al primero
                return (prevIndex + 1) % (isPurpleAdded ? colors.length : colors.length - 1);
            });
        }	
    };

    const purpleController = () => {
        if (isPurpleAdded) {
            setColorIndex(0); 
            setIsPurpleAdded(false);
        } else {
            setColorIndex(colors.indexOf("purple")); 
            setIsPurpleAdded(true);
        }
    };

    return (
        <div className="background-wrapper">
            <div className="d-flex flex-column align-items-center pt-5"> 
                <div className={`traffic-light ${isPurpleAdded ? 'purple' : ''}`}>
                    <div
                        className={`light red-light ${colors[colorIndex] === "red" ? "active red-shadow" : ""}`}
                        onClick={() => setColorIndex(0)} 
                    ></div>
                    <div
                        className={`light yellow-light ${colors[colorIndex] === "yellow" ? "active yellow-shadow" : ""}`}
                        onClick={() => setColorIndex(1)} 
                    ></div>
                    <div
                        className={`light green-light ${colors[colorIndex] === "green" ? "active green-shadow" : ""}`}
                        onClick={() => setColorIndex(2)} 
                    ></div>

                    {isPurpleAdded && (
                        <div className={`light purple-light ${colors[colorIndex] === "purple" ? "active purple-shadow" : ""}`}
                             onClick={() => setColorIndex(3)} 
                        ></div>
                    )}
                </div>

                <div className="mt-5 d-flex justify-content-center w-50">
                    <button className="btn btn-primary me-2" onClick={toggleColor}>
                        Alternar Color
                    </button>
                    <button className="btn btn-secondary" onClick={purpleController}>
                        {isPurpleAdded ? "Quitar Púrpura" : "Agregar Púrpura"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
