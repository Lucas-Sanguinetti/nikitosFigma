import { Link } from '@inertiajs/react';
import { category } from '@/types/category';
export default function ProductsList({categories} : { categories: category[] }) { 

    /*aqui debe de usarse el backend */

    
    const route = "productos/producto/1"
    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }
    console.log(categories);
    

    return (
        <> 
            <div> 
            Linea de productos
            </div> 
                <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                    {categories.map((category) => (
                    <li key={category.id} style={{
                        border: `3px solid ${category.color}`}}>
                        <Link href={route}>
                            <img src={`/${category.imagen}`} alt={category.nombre} style={{ width: '100px', height: '100px' }} />
                            {category.nombre}
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
    