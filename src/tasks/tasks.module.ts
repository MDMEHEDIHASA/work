import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { DataGetting } from './dao/for.data';

@Module({
  controllers: [TasksController],
  imports: [],
  providers: [TasksService, DataGetting],
})
export class TasksModule {}
