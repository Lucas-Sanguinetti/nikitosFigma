import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import navbar from '@/components/navbar';
import bottomPage from '@/components/bottomPage';
import { category } from '@/types/category';
import { product } from '@/types/product';


type Producto = {
    id: number;
    nombre: string;
    imagen: string;
    tagId: string;
};

export default function productPage({
    id,
    canRegister = true,
    categories,
    products,
}: {
    id: number;
    canRegister?: boolean;
    categories: category[];
    products: product[];
}) {
    const { auth } = usePage().props;


    const [tagActivo, setTagActivo] = useState<number>(
        categories?.[0]?.id ?? 0
    );

    const [productoSeleccionado, setProductoSeleccionado] = useState<product | null>(null);

    

    const productosFiltrados = products?.filter(p => p.category_id === tagActivo) ?? [];

    function clickedTag(tag: number) {
        setTagActivo(tag);
        setProductoSeleccionado(null);
    }


    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50">
                {navbar()}
            </div>

            <div className="pt-20 overflow-y-auto h-screen">

                <div>productos</div>
                <div>descargar catalogo</div>

                <div>
                    <ul>
                        {categories.map((category) => (
                            <a
                            key={category.id}
                            onClick={() => clickedTag(category.id)}
                            style={{ fontWeight: category.id === tagActivo ? 'bold' : 'normal' }}
                            >
                                {category.nombre}
                            </a>
                            ))}
                    </ul>


                    {productoSeleccionado ? (
                        <div>
                            <h2>{productoSeleccionado.nombre}</h2>
                            <img src={`/${productoSeleccionado.images[0].ruta}`} alt={productoSeleccionado.nombre} />
                        </div>
                    ) : (
                        <div>
                            {productosFiltrados.map((producto) => (
                                <div
                                    key={producto.id}
                                    onClick={() => setProductoSeleccionado(producto)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={`/${producto.images[0].ruta}`} alt={producto.nombre} />
                                    <p>{producto.nombre}</p>
                                    <button>Ver producto</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {bottomPage()}
            </div>
        </>
    );
}