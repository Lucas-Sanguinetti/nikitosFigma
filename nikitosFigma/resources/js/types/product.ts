export type product = {
    id: number;
    nombre: string;
    codigo: string;
    tamaño: string;
    vida_util: string;
    images: ProductImage[];

    [key: string]: unknown;
};

export interface ProductImage {
    id: number;
    product_id: number;
    ruta: string;

}
