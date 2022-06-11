// @ts-check
const { v4 } = require('uuid')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const prismaBinary = path.join(__dirname, '..', '..', 'node_modules', '.bin', 'prisma')

module.exports = async () => {
  // Generate a unique schema identifier for this test context
  const schema = `test_${v4()}`

  // Generate the pg connection string for the test schema
  const databaseUrl = `${process.env.DATABASE_URL}?schema=${schema}`

  global.process.env.DATABASE_URL = databaseUrl
  global.process.env.POSTGRES_SCHEMA = schema

  // Run the migrations to ensure our schema has the required structure
  await exec(`DATABASE_URL=${databaseUrl} ${prismaBinary} migrate deploy`)
}
