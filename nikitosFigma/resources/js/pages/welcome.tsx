import { Head, Link, usePage } from '@inertiajs/react';
import { login, register } from '@/routes';
import navbar from '@/components/navbar';
import banner from '@/components/banner';
import aboutUs from '@/components/aboutUs';
import productsList from '@/components/productsList';
import featuredProducts from '@/components/featuredProducts';
import recipes from '@/components/recipes';
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

                {banner()}

                {aboutUs()}

                {productsList()}

                {featuredProducts()}

                {recipes()}

        </div>

            {bottomPage()}
        </>
    );
}
