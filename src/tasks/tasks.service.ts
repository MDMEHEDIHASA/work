import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { uuid } from 'uuidv4';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((tsk) => tsk.id === id);
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  createTask(crTaskDto: CreateTaskDto): Task {
    const { title, description } = crTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    console.log('Task Deleted.');
  }
  updateTask(id: string, @Body('status') status: TaskStatus): Task {
    //const task = this.tasks.find((task) => task.id === id);
    const task = this.getTaskById(id);
    // if(!task){
    //   throw new NotFoundException()
    // }
    task.status = status;
    return task;
  }
}
