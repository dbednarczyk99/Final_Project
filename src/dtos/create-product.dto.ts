import { ProductCategory } from '@prisma/client';
import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 30)
  name: string;

  @IsNotEmpty()
  @IsString()
  category: ProductCategory;

  @IsNotEmpty()
  @IsString()
  @Length(10, 50)
  shortDescription: string;

  @IsNotEmpty()
  @IsString()
  @Length(200, 600)
  longDescription: string;

  @IsNotEmpty()
  @IsString()
  mainImageUrl: string;

  @IsNotEmpty()
  @IsString({ each: true })
  additionalImagesUrl: string[];

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;
}
