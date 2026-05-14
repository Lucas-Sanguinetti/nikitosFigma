import React from "react";
export default function Recipes() { 

    /*aqui debe de usarse el backend */

    const menuItems = ["r1 ", "r2 ", "r3 "]
    const route = "recetas/receta/1"

    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            <div> 
            Recetas
            </div> 
            <li style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                {menuItems.map((item) => (
                    <a href={route} key={item} onClick={() => clickedSection(item)}>
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
    