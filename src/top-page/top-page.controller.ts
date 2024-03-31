import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) { // Omit<ProductModel, '_id'> исключает _id из переданной модели
  }

  @Get(':id')
  async get(@Param('id') is: string) { }

  @Delete(':id')
  async delete(@Param('id') is: string) { }

  @Patch(':id')
  async patch(@Param('id') is: string, @Body() dto: TopPageModel) { }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) { }

}
