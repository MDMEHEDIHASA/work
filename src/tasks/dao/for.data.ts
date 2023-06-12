import { InjectKnex, Knex } from 'nestjs-knex';

export class DataGetting {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  async getUsers() {
    const tasks = await this.knex.table('task');
    return tasks;
  }

  async getTaskById(id: number) {
    const singleTask = await this.knex.table('task').where({ id: id });
    return singleTask;
  }
}
