export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DATABASE: {
    host: process.env.DBURL,
    port: parseInt(process.env.PGPORT, 10) || 5432
  },
  BASE_URL: process.env.BASE_URL || `http://localhost:3000`
})
