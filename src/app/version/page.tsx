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
      <table>

        {result.map((r, index) => {
          return <tr key={i}>
            <td>{r.item}</td>
            <td>{r.name}</td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default Page