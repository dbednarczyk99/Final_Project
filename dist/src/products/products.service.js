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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let ProductsService = class ProductsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.product.findMany({
            include: {
                additionalImagesUrl: true,
                orderItems: true,
            },
        });
    }
    getById(id) {
        return this.prismaService.product.findUnique({
            where: { id },
            include: {
                additionalImagesUrl: true,
                orderItems: true,
            },
        });
    }
    deleteById(id) {
        return this.prismaService.product.delete({
            where: { id },
        });
    }
    create(productData) {
        const { additionalImagesUrl } = productData, restData = __rest(productData, ["additionalImagesUrl"]);
        return this.prismaService.product.create({
            data: Object.assign(Object.assign({}, restData), { additionalImagesUrl: {
                    create: additionalImagesUrl.map((url) => ({ url })),
                } }),
            include: {
                additionalImagesUrl: true,
            },
        });
    }
    updateById(id, productData) {
        const { additionalImagesUrl } = productData, restData = __rest(productData, ["additionalImagesUrl"]);
        const data = Object.assign({}, restData);
        if (additionalImagesUrl !== undefined) {
            data.additionalImagesUrl = {
                deleteMany: {},
                create: additionalImagesUrl.map((url) => ({ url })),
            };
        }
        return this.prismaService.product.update({
            where: { id },
            data,
            include: {
                additionalImagesUrl: true,
            },
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map