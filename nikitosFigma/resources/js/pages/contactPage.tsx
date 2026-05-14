import { Head, Link, usePage } from '@inertiajs/react';
import navbar from '@/components/navbar';
import bottomPage from '@/components/bottomPage';

export default function ContactPage({
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
       
        <div className="pt-20 overflow-y-auto h-screen">

                <div>
                    <div>
                        <span>Ventas ›</span>
                        <span>RR.HH.›</span>
                    </div>
                    <div>
                        aca va el formulario de contacto, con los campos de nombre, mail, telefono y mensaje.
                    </div>
                </div>

                {bottomPage()}

        </div>

            
        </>
    );
}
