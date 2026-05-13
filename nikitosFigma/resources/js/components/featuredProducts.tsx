import React from "react";
export default function FeaturedProducts() { 

    /*aqui debe de usarse el backend */

    const menuItems = ["P1 ", "P2 ", "P3 ", "P4"]

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
                        categoria
                        {item}
                        <div>
                            Ver Producto
                        </div>
                    </a>
                ))}
            </li>

        </>
    ); 
} 
    