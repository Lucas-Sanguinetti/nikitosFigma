import { Head, Link, usePage } from '@inertiajs/react';
import { category } from '@/types/category';
import { product } from '@/types/product';
import { recipe } from '@/types/recipe';
import ProductsList from '@/components/productsList';
import FeaturedProducts from '@/components/featuredProducts';
import Recipes from '@/components/recipes';
import BottomPage from '@/components/bottomPage';
import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import AboutUs from '@/components/aboutUs';

export default function Welcome({
    categories = [],
    featuredCategories = [],
    products= [],
    canRegister = true,
    recipes = []
}: {
    categories: category[];
    featuredCategories: category[];
    products: product[];
    canRegister?: boolean;
    recipes?: recipe[];
}) {
    const { auth } = usePage().props;
    

    return (
        <>

        <div className="fixed top-0 left-0 w-full z-50">
                <Navbar /> 
        </div>
       
        <div className="pt-20">

                <Banner />

                <AboutUs />

                <ProductsList categories={categories} />

                <FeaturedProducts products={products} />

                <Recipes recipes={recipes} />

                <BottomPage />

        </div>

            
        </>
    );
}
