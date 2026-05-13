import React from "react";
export default function Banner() { 

    function logClick() {
        console.log("Button clicked!");
    }

    return (
        <> 
            <div> 
                Nikitos Snacks
            </div> 
            <div>
                Nikitos se encuentra presente en el mercado local desde hace 40 años.
            </div>
            <div onClick={logClick}>
                descargar catalogo
            </div>
            <div onClick={logClick}>
                ver productos
            </div>
        </>
    ); 
} 