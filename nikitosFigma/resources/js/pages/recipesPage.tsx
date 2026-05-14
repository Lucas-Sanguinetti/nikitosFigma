import { Head, Link, usePage } from '@inertiajs/react';
import { login, register } from '@/routes';
import navbar from '@/components/navbar';
import bottomPage from '@/components/bottomPage';

export default function Welcome({
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

            aca van las recetas

        </div>

            {bottomPage()}
        </>
    );
}
