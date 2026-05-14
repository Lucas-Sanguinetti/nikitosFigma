import { Link } from '@inertiajs/react';
export default function ProductsList() { 

    /*aqui debe de usarse el backend */

    const menuItems = ["Tradicional Escolar ", "Juvenil Mentalizada ", "Lineaa Max ", "Premiun Max 120g "]
    const route = "productos/producto/1"
    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            <div> 
            Linea de productos
            </div> 
                <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                    {menuItems.map((item) => (
                    <li key={item}>
                        <Link href={route}>
                            {item}
                        </Link>
                    </li>
                    ))}
                </ul>
            <div onClick={() => clickedSection("ver Todas")}>
                Ver Todas
            </div>

        </>
    ); 
} 
    