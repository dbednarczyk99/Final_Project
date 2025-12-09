import { OrdersService } from './orders.service';
import { CreateOrderDTO } from 'src/dtos/create-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAllOrders(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        customerPhone: string;
        customerEmail: string;
        customerAddress: string;
        totalPrice: number;
    }[]>;
    getOrderById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        customerPhone: string;
        customerEmail: string;
        customerAddress: string;
        totalPrice: number;
    }>;
    deleteOrderById(id: string): Promise<{
        success: boolean;
    }>;
    createOrder(orderData: CreateOrderDTO): Promise<{
        success: boolean;
        orderId: string;
    }>;
}
