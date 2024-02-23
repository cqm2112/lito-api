/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import {InsuranceService } from './insurance.service';
import { CreateTodoDto } from './create-insurance-dto';
import { Insurance } from './Insurance.interface';
import { ApiTags,ApiResponse  } from '@nestjs/swagger';
import { InsuranceSch } from './insurance.schema';

@Controller('insurances')

@ApiTags('insurances')
export class InsuranceController {
  constructor(private readonly todoService: InsuranceService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Insurance> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of all insurances', type: [InsuranceSch] })
  async findAll(): Promise<Insurance[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Insurance> {
    return this.todoService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: CreateTodoDto): Promise<Insurance> {
    return this.todoService.update(id, updateTodoDto);
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Insurance> {
    return this.todoService.remove(id);
  }

}
