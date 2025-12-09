import { PrismaService } from 'src/shared/services/prisma.service';
import { Order } from '@prisma/client';
import { CreateOrderDTO } from 'src/dtos/create-order.dto';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Order[]>;
    getById(id: Order['id']): Promise<Order | null>;
    deleteById(id: Order['id']): Promise<Order>;
    create(orderData: CreateOrderDTO): Promise<{
        success: boolean;
        orderId: string;
    }>;
}
