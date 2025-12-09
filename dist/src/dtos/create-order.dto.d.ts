export declare class CreateOrderItemDTO {
    productId: string;
    quantity: number;
}
export declare class CreateOrderDTO {
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerAddress: string;
    orderItems: CreateOrderItemDTO[];
}
