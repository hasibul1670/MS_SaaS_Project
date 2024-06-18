import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Product extends Document {
  @Prop({ required: true })
  product_name: string;
  @Prop({ required: true })
  price: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
