import duckdb from '@duckdb/node-api'

export const getVersion = () => {
  return duckdb.version()
}

