import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Product } from './classes/create-product';
import { ProductsService } from './products.service';
import { ProductI } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  getAllProducts(): Promise<ProductI[]> {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  getProductById(@Param('id') idProduct: string): Promise<ProductI> {
    return this.productService.getProductById(idProduct);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addProduct(@Body() product: Product): Promise<ProductI> {
    return this.productService.addProduct(product);
  }

  @Put('/:id')
  updateProductById(
    @Param('id')
    productId: string,
    @Body()
    product: Product,
  ): Promise<ProductI> {
    return this.productService.updateProductById(productId, product);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') productId: string): Promise<ProductI> {
    return this.productService.deleteProduct(productId);
  }
}
