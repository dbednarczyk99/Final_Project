"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
const common_2 = require("@nestjs/common");
let OrdersService = class OrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
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
    getById(id) {
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
    deleteById(id) {
        return this.prisma.order.delete({
            where: { id },
        });
    }
    async create(orderData) {
        const { customerName, customerPhone, customerEmail, customerAddress, orderItems, } = orderData;
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
            throw new common_2.BadRequestException('Some products do not exist.');
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
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map