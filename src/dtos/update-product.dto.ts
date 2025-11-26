import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 30)
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 300)
  description: string;

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
