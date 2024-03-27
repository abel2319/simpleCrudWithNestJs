import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './schemas/tasks.schemas';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Tasks[]> {
    return this.tasksService.findAll();
  }

  @Post()
  async createTask(
    @Body()
    task: CreateTaskDto,
  ): Promise<Tasks> {
    return this.tasksService.create(task);
  }

  @Get(':id')
  async getTask(
    @Param('id')
    id: string,
  ): Promise<Tasks> {
    return this.tasksService.findById(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id')
    id: string,
    @Body()
    task,
  ): Promise<Tasks> {
    return this.tasksService.updateById(id, task);
  }

  @Delete(':id')
  async deleteTask(
    @Param('id')
    id: string,
  ): Promise<Tasks> {
    return this.tasksService.deleteById(id);
  }
}
