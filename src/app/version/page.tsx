"use server"
import { getVersion } from "../../lib/duckdb"

const Page = async ({ props }: PageProps<"/version">) => {
  const version = await getVersion()
  return (
    <div>
      <h1>DuckDB Version</h1>
      <p>{version}</p>
    </div>
  )
}

export default Page