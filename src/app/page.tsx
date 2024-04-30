"use client";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function Page() {
  return (
    <>
    <SiteHeader></SiteHeader>
    <main className="mx-auto mt-custom px-4 text-center sm:px-6 lg:px-8 max-w-screen-xl searchWrap">
      <form action="/result">
        <input className="border border-orange-500 rounded-md px-4 py-2" type="url" name="url" />
        <button className="rounded-md bg-orange-500 text-white ml-4 px-4 py-2" type="submit">Kør Testen</button>
      </form>
      <p className="text-gray-500 mt-8">Med denne redskab kan du teste websidens tilgængelighed. Indtast en web adresse i feltet ovenfor og vent på rapporten genereres, det tager cirka 5-15 sekunder. Du får en detaljeret overblik over de regler som der er blevet testet for, samt en "Page Grade" som en udtryk for hvor tilgængelig websiden er.</p>
    </main>
    <SiteFooter></SiteFooter>
    </>
  );
}
