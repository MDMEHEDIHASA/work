import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'postgres',
          password: 'postgres',
          database: 'taskmanagement',
        },
      },
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
