import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // GET(/products) - get all
  @Get('/')
  async getAllProducts() {
    return this.productsService.getAll();
  }

  // GET(/products/:id)
  @Get('/:id')
  async getProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found!');
    return product;
  }

  // DELETE(/products/:id)
  @Delete('/:id')
  async deleteProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.productsService.getById(id))) {
      throw new NotFoundException('Product not found!');
    }

    await this.productsService.deleteById(id);
    return { success: true };
  }

  // POST(/products)
  @Post('/')
  createProduct(@Body() productData: any) {
    return this.productsService.create(productData);
  }

  // PUT(/products/:id)
  @Put('/:id')
  async editProductById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: any,
  ) {
    if (!(await this.productsService.getById(id))) {
      throw new NotFoundException('Product not found!');
    }

    await this.productsService.updateById(id, productData);
    return { success: true };
  }
}
