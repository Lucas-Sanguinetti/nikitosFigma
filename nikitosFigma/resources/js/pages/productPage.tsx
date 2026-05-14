import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import navbar from '@/components/navbar';
import bottomPage from '@/components/bottomPage';
import { producto } from '@/routes';

// Definimos el tipo del producto para que TypeScript esté contento
// Ajustá las propiedades según lo que te venga del backend
type Producto = {
    id: number;
    nombre: string;
    imagen: string;
    tagId: string;
};

export default function Welcome({
    id,
    canRegister = true,
    productos, // productos vendrá del backend eventualmente
}: {
    id: number;
    canRegister?: boolean;
    productos?: Producto[];
}) {
    const { auth } = usePage().props;
    const tags = ["salados", "dulces", "jugos", "cereales", "pochoclos", "palitos", "pizzitos", "maikitos"];


    const [tagActivo, setTagActivo] = useState<string>(tags[0]);

    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

    const productosMock: Producto[] = [
    { id: 1, nombre: "Palitos de queso", imagen: "https://placehold.co/300x200", tagId: "palitos" },
    { id: 2, nombre: "Palitos de sal", imagen: "https://placehold.co/300x200", tagId: "palitos" },
    { id: 3, nombre: "Pochoclo dulce", imagen: "https://placehold.co/300x200", tagId: "pochoclos" },
    { id: 4, nombre: "Pochoclo salado", imagen: "https://placehold.co/300x200", tagId: "pochoclos" },
    { id: 5, nombre: "Jugo de naranja", imagen: "https://placehold.co/300x200", tagId: "jugos" },
    { id: 6, nombre: "Jugo de manzana", imagen: "https://placehold.co/300x200", tagId: "jugos" },
    { id: 7, nombre: "Cereal de miel", imagen: "https://placehold.co/300x200", tagId: "cereales" },
    { id: 8, nombre: "Pizzito clasico", imagen: "https://placehold.co/300x200", tagId: "pizzitos" },
    { id: 9, nombre: "Maikito original", imagen: "https://placehold.co/300x200", tagId: "maikitos" },
    { id: 10, nombre: "Alfajor de chocolate", imagen: "https://placehold.co/300x200", tagId: "dulces" },
    { id: 11, nombre: "Tostado salado", imagen: "https://placehold.co/300x200", tagId: "salados" },
    
    ];

    

    const productosFiltrados = productosMock.filter(p => p.tagId === tagActivo);

    function clickedTag(tag: string) {
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
                        {tags.map((tag) => (
                            <a
                            key={tag}
                            onClick={() => clickedTag(tag)}
                            style={{ fontWeight: tag === tagActivo ? 'bold' : 'normal' }}
                            >
                                {tag}
                            </a>
                            ))}
                    </ul>


                    {productoSeleccionado ? (
                        <div>
                            <button onClick={() => setProductoSeleccionado(null)}>
                                ← Volver a {tagActivo}
                            </button>
                            <h2>{productoSeleccionado.nombre}</h2>
                            <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} />
                        </div>
                    ) : (
                        <div>
                            {productosFiltrados.map((producto) => (
                                <div
                                    key={producto.id}
                                    onClick={() => setProductoSeleccionado(producto)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={producto.imagen} alt={producto.nombre} />
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