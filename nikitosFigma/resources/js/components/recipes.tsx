import React from "react";
export default function Recipes() { 

    /*aqui debe de usarse el backend */

    const menuItems = ["r1 ", "r2 ", "r3 "]

    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            <div> 
            Recetas
            </div> 
            <li>
                {menuItems.map((item) => (
                    <a href={`#${item } `} key={item} onClick={() => clickedSection(item)}>
                        imagen
                        {item}
                        <div>
                            Ver receta
                        </div>
                    </a>
                ))}
            </li>

        </>
    ); 
} 
    