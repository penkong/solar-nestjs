import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

// ---

export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DATABASE: {
    type: process.env.DBTYPE || 'postgres',
    host: process.env.DBURL,
    port: parseInt(process.env.PGPORT, 10) || 5432,
    database: process.env.DBNAME,
    username: process.env.PGUSER,
    password: process.env.PGPASS
  },
  BASE_URL:
    process.env.BASE_URL ||
    `http://localhost:${parseInt(process.env.PORT, 10) || 3000}`,
  ENV: process.env.NODE_ENV || 'development'
})

export interface IPgDBConfig {
  type: PostgresConnectionOptions['type']
  host: string
  port: number
  database: string
  username: string
  password: string
}
