import React from "react";
import { Link } from '@inertiajs/react';
import { category } from '@/types/category';


export default function ProductTags({ categories }: { categories: category[] }) {

    
    const tagsRoute = "/productos/producto/"
    const itemid = 1

    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    

    return (
        <> 
            
            <ul>
                {categories.map((category) => (
                <li key={category.id}>
                    <Link href={`${tagsRoute}${category.id}`}>
                        {category.nombre}
                    </Link>
                </li>
                ))}
            </ul>  

        </>
    ); 
} 
    