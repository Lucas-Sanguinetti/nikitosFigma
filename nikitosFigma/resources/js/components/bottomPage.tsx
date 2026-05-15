import React from "react";
import { Link } from '@inertiajs/react';

export default function BottomPage() { 

    const menuItems = ["home ", "productos ", "donde comprar ", "RSE ", "recetas ", "nosotros ", "contacto ", "Politicas de calidad"]
    const menuItemsEnabled = [{name : "home", route: "/"},
                              {name : "productos", route: "/productos"},
                              {name : "donde comprar", route: "/donde-comprar"},
                              {name : "recetas", route: "/recetas"},
                              {name : "nosotros", route: "/nosotros"},
                              {name : "contacto", route: "/contacto"}]



    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
       <>
        <img src="images/fondoBottom.png" alt="Logo" style={{ height: '40px' }} />
       <div style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
        <div>
            <Link href={"/"}> 
                <img src="/images/logo.png" alt="Logo" style={{ height: '40px' }} />
            </Link>
            <div>
                instagrama facebook
            </div> 
            
        </div>
        <div>
            Secciones
            <ul style={{ columns: 2, listStyle: 'none', padding: 0, margin: 0 }}>
                    {menuItemsEnabled.map((item) => (
                    <li key={item.route}>
                        <Link href={item.route}>
                            {item.name}
                        </Link>
                    </li>
                 ))}
            </ul>
        </div>
        <div>
            <div>
                Suscribete al Newsletter
            </div>
            <div>
                /*falta el formulario de mail*/ 
            </div>  
        </div>
        <div>
            <div>
                Contacto
            </div>
            <div>
                 Av. Otero 4550, Pontevedra, Provincia de Buenos Aires
            </div>
            <div>
                +54 220 492-4752
            </div>
            <div>
                ventas@nikitos.com.ar
            </div>
            <div>
                Lunes a Viernes 9.00 a 17:30hs
            </div>  
        </div>
       </div>
       
       <div>
            © Copyright 2025 Nikitos Snacks. Todos los derechos reservados.
       </div>
       </>
    ); 
} 
    