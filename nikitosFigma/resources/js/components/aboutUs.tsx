import React from "react";
export default function AboutUs() { 

    function logClick() {
        console.log("Button clicked!");
    }

    return (
        <> 
            <div> 
                Nosotros
            </div> 
            <div>
                <div>
                    Nikitos se encuentra presente en el mercado local desde hace 40 años. 
                    Ofreciendo un variado portfolio de snacks , tales como Pizzitos, Palitos 
                    salados, Maikitos de Queso, Papas Fritas, Cereales, Pochoclos 
                    Acaramelados, Bolitas/Aritos dulces, y Jugos para Congelar. El objetivo es 
                    llegar a los consumidores con ingredientes de calidad, contando con 
                    presencia de venta en todo el país y atención de excelencia.
                </div>
                <div>
                    <img src="images/papasIncio.png" alt="Logo" style={{ height: '40px' }} />
                </div>
            </div>
            
            <div onClick={logClick}>
                Mas info
            </div>
        </>
    ); 
} 