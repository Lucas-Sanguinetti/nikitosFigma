import { Head, Link, usePage } from '@inertiajs/react';
import { login, register } from '@/routes';
import navbar from '@/components/navbar';
import productTags from '@/components/productsTags';
import bottomPage from '@/components/bottomPage';

export default function ProductsPage({
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
                Products
            </div>
       
            <div className="pt-20 overflow-y-auto h-screen">

                {productTags()}

            </div>

            {bottomPage()}

        </>
    );
}