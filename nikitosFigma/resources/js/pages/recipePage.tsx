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



    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50">
                {navbar()}
            </div>

            <div className="pt-20 overflow-y-auto h-screen">

                <div>
                    Recetas
                </div>

                <div>
                    <div>
                        Nombre de la receta
                    </div>

                    <div>
                        <div>
                            <div>
                                tiempo de preparacion
                            </div>

                            <div>
                                minutos
                            </div>

                        </div>

                        <div>
                            <div>
                                Porciones
                            </div>

                            <div>
                                cant porciones
                            </div>

                        </div>
                    </div>

                    <div>
                        <div>
                            Comparte esta receta 
                        </div>

                        <div>
                            facebook instagram
                        </div>
                    </div>   
                </div>

                <div style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                    <div>
                        <div>
                            Ingredientes
                        </div>

                        <div>
                            lista de ingredientes
                        </div>
                    </div>

                    <div>
                        <div>
                            Preparacion
                        </div>

                        <div>
                            lista de pasos
                        </div>     
                    </div>     
                </div>

                {bottomPage()}
            </div>
        </>
    );
}