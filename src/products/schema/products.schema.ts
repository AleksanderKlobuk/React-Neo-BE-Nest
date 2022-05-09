
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  item: string;

}

export const ProductsSchema = SchemaFactory.createForClass(Product);