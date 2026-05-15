export type recipe = {
    id: number;
    nombre: string;
    tiempo_preparacion: string;
    porciones: string;
    imagen: string;
    images: string;

    [key: string]: unknown;
};

export interface Paso {
    id: number;
    recipe: number;
    paso: string;

}

export interface Ingrediente {
    id: number;
    recipe: number;
    Ingrediente: string;

}

