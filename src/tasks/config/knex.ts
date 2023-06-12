import Knex from 'knex';

const knex = Knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'taskmanagement',
  },
});

export const onDatabaseConnect = async () => knex.raw('SELECT 1');
export default knex;
 