import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductsDocument } from './schema/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductsDocument>) {}
  
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  };

  async findAll() {
    return this.productModel.find();
  }

  async findOne(_id: string) {
    return this.productModel.findOne({_id});
  }

  async update(item: string, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne({item} ,{$set:{...updateProductDto}});
  }

  async remove(item: string) {
    return this.productModel.deleteOne({item});
  }
}
