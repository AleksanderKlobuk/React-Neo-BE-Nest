import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.productsService.findOne(_id);
  }

  @Patch(':item')
  update(@Param('item') item: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(item, updateProductDto);
  }

  @Delete(':item')
  remove(@Param('item') item: string) {
    return this.productsService.remove(item);
  }

}
