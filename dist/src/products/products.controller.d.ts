import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<any>;
    deleteProductById(id: string): Promise<{
        success: boolean;
    }>;
    createProduct(productData: any): Promise<Product>;
    editProductById(id: string, productData: any): Promise<{
        success: boolean;
    }>;
}
