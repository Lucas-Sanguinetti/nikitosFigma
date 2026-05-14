import React from "react";
import { Link } from '@inertiajs/react';


export default function productsTags() { 

    const menuItems = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"]
    const tagsRoute = "/productos/producto/"
    const itemid = 1

    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            
            <ul>
                {menuItems.map((item) => (
                <li key={item}>
                    <Link href={`${tagsRoute}${itemid}`}>
                        {item}
                    </Link>
                </li>
                ))}
            </ul>  

        </>
    ); 
} 
    