import { recipe } from "@/types/recipe";
import React from "react";

export default function Recipes({ recipes }: { recipes: recipe[] }) { 


    const route = "recetas/receta/1"

    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            <div> 
            Recetas
            </div> 
            <li style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                {recipes.map((recipe) => (
                    <a href={route} key={recipe.id} onClick={() => clickedSection(recipe.nombre)}>
                        <img src={recipe.imagen} alt={recipe.nombre} />
                        {recipe.nombre}
                        <div>
                            Ver receta
                        </div>
                    </a>
                ))}
            </li>

        </>
    ); 
} 
    