/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_MODEL') private ProductModel: Model<Product>) {}

  async create(body: any) {
    const result = await this.ProductModel.create(body);
    console.log('🚀 ~ ProductService ~ create ~ result:', result);
    return result;
  }

  findAll() {
    return this.ProductModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
