import { Injectable, NotFoundException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Tasks } from './schemas/tasks.schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks.name)
    private tasksModel: mongoose.Model<Tasks>,
  ) {}

  async findAll(): Promise<Tasks[]> {
    const tasks = await this.tasksModel.find();
    return tasks;
  }

  async create(task: Tasks): Promise<Tasks> {
    const res = await this.tasksModel.create(task);
    return res;
  }

  async findById(id: string): Promise<Tasks> {
    const task = await this.tasksModel.findById(id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async updateById(id: string, task: Tasks): Promise<Tasks> {
    return await this.tasksModel.findByIdAndUpdate(id, task, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Tasks> {
    return await this.tasksModel.findByIdAndDelete(id);
  }
}
