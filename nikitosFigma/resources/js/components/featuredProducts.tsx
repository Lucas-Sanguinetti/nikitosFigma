import { product } from '@/types/product';
import { Link } from '@inertiajs/react';

export default function FeaturedProducts({ products }: { 
    products: product[]
 }) { 



    const route = "productos/producto/1"
    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }
    
    return (
            <> 
                <div> 
                 Productos destacados
                </div> 
                <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link href={route}>
                                {product.images && product.images.length > 0 && (
                                    <img
                                        src={`/${product.images[0].ruta}`}
                                        alt={product.nombre}
                                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                                    />
                                )}
                                <div>categoria</div>
                                <div>{product.nombre}</div>
                                <div>Ver Producto</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        ); 
} 
    