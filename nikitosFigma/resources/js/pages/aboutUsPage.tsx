import { Head, Link, usePage } from '@inertiajs/react';
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

                <div>
                    Nosotros
                </div>

                <div>
                    ¿Quiénes somos?
                    Nikitos se encuentra presente en el mercado local desde hace 40 años.
                    Actualmente cuenta con un amplio portfolio de snacks , tales como Pizzitos, 
                    Palitos salados, Maikitos de Queso, Papas Fritas, Cereales, Pochoclos 
                    Acaramelados, Bolitas/Aritos dulces, y Jugos para Congelar. El objetivo es 
                    llegar a los consumidores con ingredientes naturales y más saludables,
                    contando con presencia de venta en todo el país y calidad de atención de 
                    excelencia.
                    Trabajamos junto a nuestros colaboradores enérgicamente en la producción y 
                    desarrollo de nuevos productos creados específicamente para satisfacer los 
                    gustos y tendencias de los consumidores, para llegar a ser la compañía local de 
                    alimentos y bebidas, que sobresale por su calidad y precios bajos.
                </div>

                <div>
                    Nuestra planta modelo
                    Con una vocación de reinversión permanente en tecnología de punta y de mejora continua en los procesos 
                    productivos, trabajamos para superar nuestros propios estándares de productividad, con operaciones 
                    industriales que se desarrollan bajo un Sistema de Gestión Integral (SGI) diseñado por y para Nikitos, que 
                    contempla las características propias de la empresa y las bases de las distintas herramientas para la gestión 
                    implementadas en el mercado. Contamos con una Planta Industrial de 5500m2, en Buenos Aires, Argentina 
                    y otra en Montevideo, Uruguay.
                </div>

                <div>
                    El equipo
                    La integración sinérgica y creativa de los recursos y valores humanos representa el más importante capital en 
                    Nikitos. Nuestra filosofía corporativa es mantener un crecimiento sustentable al invertir en un futuro más 
                    saludable para la gente y para nuestro planeta.
                </div>

                <div>
                    Nuestra flota
                    Nuestro departamento de logística se especializa en realizar la distribución nacional de nuestros productos, 
                    contando con una Flota de Camiones, adecuados para su entrega en todo el territorio argentino.
                </div>

                {bottomPage()}

        </div>

            
        </>
    );
}
