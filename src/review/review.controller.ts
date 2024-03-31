import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) { // Omit<ProductModel, '_id'> исключает _id из переданной модели
  }

  @Delete(':id')
  async delete(@Param('id') is: string) { }

  @Get('byProduct/:productId')
  async getByProduct(@Param(':productId') productId: string) { }
}
