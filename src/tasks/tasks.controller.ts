import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { TaskStatusValidationPipe } from './pipes/taskStatusValidationPipe';
import { DataGetting } from './dao/for.data';

@Controller('api/tasks')
export class TasksController {
  constructor(
    private taskService: TasksService,
    private dataAccess: DataGetting,
  ) {}
  @Get()
  async getAllTask() {
    return this.dataAccess.getUsers();
    //return this.taskService.getAllTasks();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() crTaskDto: CreateTaskDto): Task {
    try {
      console.log(crTaskDto);
      //const { title, description } = body;
      return this.taskService.createTask(crTaskDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: number) {
    return this.dataAccess.getTaskById(id);
    //return this.taskService.getTaskById(id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    return this.taskService.deleteTask(id);
  }

  @Put('/:id/status')
  updateTask(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Task {
    console.log(status);
    return this.taskService.updateTask(id, status);
  }
}
