import React from "react";
export default function bottomPage() { 

    const menuItems = ["home ", "productos ", "donde comprar ", "RSE ", "recetas ", "nosotros ", "contacto ", "Politicas de calidad"]


    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
       <>
       
       <div>
        <div>
            logo, instagrama facebook
        </div>
        <div>
            Secciones
            <li>
                {menuItems.map((item) => (
                    <a href={`#${item } `} key={item} onClick={() => clickedSection(item)}>
                        {item}
                    </a>
                ))}
            </li>
        </div>
        <div>
            Suscribete al Newsletter
            /*falta el formulario de mail*/ 
        </div>
        <div>
            Contacto
            Av. Otero 4550, Pontevedra, Provincia de Buenos Aires
            +54 220 492-4752
            ventas@nikitos.com.ar
            Lunes a Viernes 9.00 a 17:30hs
        </div>
       </div>
       
       <div>
            © Copyright 2025 Nikitos Snacks. Todos los derechos reservados.
       </div>
       </>
    ); 
} 
    