export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}
export interface Order {
    id: string;
    client: string;
    productId: string;
    address: string;
}
type DBData = {
    products: Product[];
    orders: Order[];
};
export declare const db: DBData;
export {};
