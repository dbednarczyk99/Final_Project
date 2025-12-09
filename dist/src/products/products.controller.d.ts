import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<{
        name: string;
        category: import(".prisma/client").$Enums.ProductCategory;
        shortDescription: string;
        longDescription: string;
        mainImageUrl: string;
        price: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getProductById(id: string): Promise<{
        name: string;
        category: import(".prisma/client").$Enums.ProductCategory;
        shortDescription: string;
        longDescription: string;
        mainImageUrl: string;
        price: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteProductById(id: string): Promise<{
        success: boolean;
    }>;
    createProduct(productData: any): Promise<{
        name: string;
        category: import(".prisma/client").$Enums.ProductCategory;
        shortDescription: string;
        longDescription: string;
        mainImageUrl: string;
        price: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editProductById(id: string, productData: any): Promise<{
        success: boolean;
    }>;
}
