import { ProductCategory } from '@prisma/client';
export declare class CreateProductDTO {
    name: string;
    category: ProductCategory;
    shortDescription: string;
    longDescription: string;
    mainImageUrl: string;
    additionalImagesUrl: string[];
    price: number;
}
