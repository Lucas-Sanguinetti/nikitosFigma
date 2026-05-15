import { Head, Link, usePage } from '@inertiajs/react';
import { login, register } from '@/routes';
import ProductTags from '@/components/productsTags';
import { category } from '@/types/category';
import BottomPage from '@/components/bottomPage';
import Navbar from '@/components/navbar';

export default function ProductsPage({
    categories,
    canRegister = true,
}: {
    categories : category[]
    canRegister?: boolean;
}) {
    
    const { auth } = usePage().props;

    return (
        <>

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar /> 
            </div>

            <div>
                Products
            </div>
       
            <div className="pt-20 overflow-y-auto h-screen">

                <ProductTags categories={categories} />

            </div>

            <BottomPage />

        </>
    );
}