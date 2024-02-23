/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Insurance } from './insurance.interface';
import { CreateTodoDto } from './create-insurance-dto';

@Injectable()
export class InsuranceService {
  constructor(@InjectModel('Insurance') private readonly todoModel: Model<Insurance>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Insurance> {
    const createdTodo = new this.todoModel(createTodoDto);
    return await createdTodo.save();
  }

  async findAll(): Promise<Insurance[]> {
    return await this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Insurance> {
    return await this.todoModel.findById(id).exec();
  }

  async update(id: string, updateTodoDto: CreateTodoDto): Promise<Insurance> {
    return await this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }
  async remove(id: string): Promise<Insurance> {
    return await this.todoModel.findOneAndDelete({ _id: id });
  }

}
