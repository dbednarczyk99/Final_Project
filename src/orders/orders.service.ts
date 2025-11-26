import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Order } from '@prisma/client';
import { CreateOrderDTO } from 'src/dtos/create-order.dto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prisma.order.delete({
      where: { id },
    });
  }

  public async create(
    orderData: CreateOrderDTO,
  ): Promise<{ success: boolean; orderId: string }> {
    const {
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      orderItems,
    } = orderData;

    const order = await this.prisma.order.create({
      data: {
        customerName,
        customerPhone,
        customerEmail,
        customerAddress,
        totalPrice: 0,
      },
    });

    const products = await this.prisma.product.findMany({
      where: {
        id: { in: orderItems.map((item) => item.productId) },
      },
    });

    if (products.length !== orderItems.length) {
      throw new BadRequestException('Some products do not exist.');
    }

    let totalPrice = 0;

    const itemsToCreate = orderItems.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      const unitPrice = product.price;
      const orderItemPrice = unitPrice * item.quantity;
      totalPrice += orderItemPrice;

      return {
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice,
        orderItemPrice,
      };
    });

    await this.prisma.orderItem.createMany({
      data: itemsToCreate,
    });

    await this.prisma.order.update({
      where: { id: order.id },
      data: { totalPrice },
    });

    return { success: true, orderId: order.id };
  }
}
