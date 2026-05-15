import { Head, Link, usePage } from '@inertiajs/react';
import { login, register } from '@/routes';
import navbar from '@/components/navbar';
import bottomPage from '@/components/bottomPage';
import { recipe } from '@/types/recipe';

export default function Welcome({
    recipes,
    canRegister = true,
}: {
    canRegister?: boolean;
    recipes: recipe[];
}) {
    const { auth } = usePage().props;

    return (
        <>

        <div className="fixed top-0 left-0 w-full z-50">
                {navbar()} 
        </div>
       
        <div className="pt-20 overflow-y-auto h-screen">

            <ul>
                        {recipes.map((recipe) => (
                            <a
                            key={recipe.id}>
                                <img src={`/${recipe.imagen}`} alt={recipe.nombre} />
                                {recipe.nombre}
                                <div>
                                    ver receta
                                </div>
                            </a>
                            ))}
            </ul>

        </div>

            {bottomPage()}
        </>
    );
}
