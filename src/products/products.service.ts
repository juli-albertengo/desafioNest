import { Injectable } from '@nestjs/common';
import { Product } from '../products/classes/create-product';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductI } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<ProductI>,
  ) {}
  async getAllProducts(): Promise<ProductI[]> {
    return await this.productModel.find();
  }

  async getProductById(id: string): Promise<ProductI> {
    return await this.productModel.findOne({ _id: id });
  }

  async addProduct(product: Product): Promise<ProductI> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async updateProductById(id: string, product: Product): Promise<ProductI> {
    await this.productModel.updateOne({ _id: id }, { $set: product });
    const productoModificado = await this.productModel.findOne({ _id: id });
    return productoModificado;
  }

  async deleteProduct(id: string): Promise<ProductI> {
    return await this.productModel.findByIdAndRemove(id);
  }
}
