// @ts-check
const { Client } = require('pg')
module.exports = async () => {
  try {
    const client = new Client({
      connectionString: global.process.env.DATABASE_URL,
    })
    await client.connect()
    await client.query(`DROP SCHEMA IF EXISTS "${global.process.env.POSTGRES_SCHEMA}" CASCADE;`)

    const remainingSchemas = await client.query(
      `SELECT schema_name FROM information_schema.schemata WHERE schema_name LIKE 'test_%';`,
    )
    for (const { schema_name } of remainingSchemas.rows) {
      await client.query(`DROP SCHEMA IF EXISTS "${schema_name}" CASCADE;`)
    }
    await client.end()
  } catch (error) {
  }
}
