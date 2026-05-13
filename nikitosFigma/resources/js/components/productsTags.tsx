import React from "react";
export default function productsTags() { 

    const menuItems = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"]

    function clickedSection(section: string) {
        console.log(`Clicked on ${section}`);
    }

    return (
        <> 
            
            <li>
                {menuItems.map((item) => (
                    <a href={`#${item } `} key={item} onClick={() => clickedSection(item)}>
                        {item}
                        <div>
                            Ver Todos
                        </div>
                    </a>
                ))}
            </li>   

        </>
    ); 
} 
    