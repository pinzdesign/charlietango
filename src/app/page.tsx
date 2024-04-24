'use client'

export default function Page() {
 
  return (
    <form action="/result">
      <input type="url" name="url" />
      <button type="submit">Submit</button>
    </form>
  )
}