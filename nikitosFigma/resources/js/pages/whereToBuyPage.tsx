import { Head, Link, usePage } from '@inertiajs/react';
import navbar from '@/components/navbar';
import bottomPage from '@/components/bottomPage';

export default function WhereToBuyPage({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    
    const { auth } = usePage().props;

    return (
        <>

            <div className="fixed top-0 left-0 w-full z-50">
                {navbar()} 
            </div>

            <div>
                Donde Comprar
            </div>
       
            <div>
                <div>
                    aca va el filtrador de provincias
                </div>
                <div>
                   aca va la lista de lugares de venta
                </div>
                <div>
                    aca va el mapa
                </div>

            </div>

            {bottomPage()}

        </>
    );
}