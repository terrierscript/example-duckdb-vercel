import duckdb, { DuckDBInstance } from '@duckdb/node-api'

export const getVersion = () => {
  return duckdb.version()
}

export const querySample = async (): Promise<any[]> => {

  const instance = await DuckDBInstance.create()
  const conn = await instance.connect()
  // await conn.run(`SET home_directory = '/tmp';`)
  await conn.run(`INSTALL httpfs; `)
  await conn.run(`LOAD httpfs; `)
  const url = `https://example-duckdb-vercel.vercel.app/example/csv`
  const response = await conn.run(`SELECT * FROM read_csv('${url}')`)
  return response.getRowsJS()
}