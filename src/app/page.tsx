"use client";

export default function Page() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
      <form action="/result">
        <input type="url" name="url" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
