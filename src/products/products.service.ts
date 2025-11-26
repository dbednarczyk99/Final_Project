import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDTO } from 'src/dtos/create-product.dto';
import { UpdateProductDTO } from 'src/dtos/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: {
        additionalImagesUrl: true,
        orderItems: true,
      },
    });
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: {
        additionalImagesUrl: true,
        orderItems: true,
      },
    });
  }

  public deleteById(id: Product['id']): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }

  public create(productData: CreateProductDTO): Promise<Product> {
    const { additionalImagesUrl, ...restData } = productData;

    return this.prismaService.product.create({
      data: {
        ...restData,
        additionalImagesUrl: {
          create: additionalImagesUrl.map((url) => ({ url })),
        },
      },
      include: {
        additionalImagesUrl: true,
      },
    });
  }

  public updateById(
    id: Product['id'],
    productData: UpdateProductDTO,
  ): Promise<Product> {
    const { additionalImagesUrl, ...restData } = productData;

    const data: any = { ...restData };

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
}
