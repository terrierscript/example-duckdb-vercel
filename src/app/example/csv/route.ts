
export const GET = () => {
  const text = `
item,count
apple,1
banana,2
cherry,3
`.trim()
  return new Response(text, {
    headers: {
      "Content-Type": "text/csv"
    }
  })
}