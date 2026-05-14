import { Link } from '@inertiajs/react';
export default function FeaturedProducts() { 

    /*aqui debe de usarse el backend */

    const menuItems = ["P1 ", "P2 ", "P3 ", "P4"]
    const route = "productos/producto/1"
    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            <div> 
                Productos destacados
            </div> 
            <li style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                {menuItems.map((item) => (
                    <Link href={route} key={item}>
                        imagen
                        categoria
                        {item}
                        <div>
                            Ver Producto
                        </div>
                    </Link>
                ))}
            </li>

        </>
    ); 
} 
    