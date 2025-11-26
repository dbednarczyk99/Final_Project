import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateOrderDTO } from 'src/dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  async getAllOrders() {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  async getOrderById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = await this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Order not found!');
    return order;
  }

  @Delete('/:id')
  async deleteOrderById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.ordersService.getById(id))) {
      throw new NotFoundException('Order not found!');
    }

    await this.ordersService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  createOrder(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }
}
