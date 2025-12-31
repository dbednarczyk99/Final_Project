import { OrdersService } from './orders.service';
import { CreateOrderDTO } from 'src/dtos/create-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAllOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<any>;
    deleteOrderById(id: string): Promise<{
        success: boolean;
    }>;
    createOrder(orderData: CreateOrderDTO): Promise<{
        success: boolean;
        orderId: string;
    }>;
}
