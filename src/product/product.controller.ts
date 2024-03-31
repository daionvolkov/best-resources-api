import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {

  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) { // Omit<ProductModel, '_id'> исключает _id из переданной модели
  }

  @Get(':id')
  async get(@Param('id') is: string) { }

  @Delete(':id')
  async delete(@Param('id') is: string) { }

  @Patch(':id')
  async patch(@Param('id') is: string, @Body() dto: ProductModel) { }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) { }
}
