"use server"
import { getVersion, querySample } from "../../lib/duckdb"



const Page = async () => {
  const version = await getVersion()
  const result = await querySample()
  return (
    <div>
      <h1>DuckDB Version</h1>
      <p>{version}</p>
      <h2>Query Sample</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}

export default Page