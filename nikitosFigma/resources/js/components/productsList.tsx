import React from "react";
export default function ProductsList() { 

    /*aqui debe de usarse el backend */

    const menuItems = ["Tradicional Escolar ", "Juvenil Mentalizada ", "Lineaa Max ", "Premiun Max 120g "]

    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            <div> 
            Linea de productos
            </div> 
            <li>
                {menuItems.map((item) => (
                    <a href={`#${item } `} key={item} onClick={() => clickedSection(item)}>
                        imagen
                        {item}
                        <div>
                            Ver Todos
                        </div>
                    </a>
                ))}
            </li>
            <div onClick={() => clickedSection("ver Todas")}>
                Ver Todas
            </div>

        </>
    ); 
} 
    